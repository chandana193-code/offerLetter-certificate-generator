import { Injectable } from '@angular/core';
import PizZip from 'pizzip';

import Docxtemplater from 'docxtemplater';

import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  generateWord(student: any) {

  const today = new Date();

  const currentDate =
    String(today.getDate()).padStart(2, '0') + '-' +
    String(today.getMonth() + 1).padStart(2, '0') + '-' +
    today.getFullYear();

  fetch('assets/OfferLetterTemplate.docx')

    .then(res => res.arrayBuffer())

    .then(content => {

      const zip = new PizZip(content);

      const doc = new Docxtemplater(zip);

      doc.render({

        studentName: student.studentName,
        lastName: student.lastName,
        studentId: String(student.studentId),
        role: student.role,
        startDate: student.startDate,
        endDate: student.endDate,
        duration: student.duration,
        date: currentDate  

      });

      const out = doc.getZip().generate({
        type: 'blob',
        mimeType:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      });

      saveAs(out, student.studentName + '_OfferLetter.docx');

    });

}
}
