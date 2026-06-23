import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.css']
})
export class UploadExcelComponent {

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  onFileSelected(event: any) {

    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e: any) => {

      const workbook = XLSX.read(e.target.result, {
        type: 'binary'
      });

      const sheetName = workbook.SheetNames[0];

      const sheet = workbook.Sheets[sheetName];

      const data: any[] = XLSX.utils.sheet_to_json(sheet);

      const students = data.map(student => ({

        ...student,

        studentId: String(student.studentId),

        startDate: this.excelDateToJSDate(student.startDate),

        endDate: this.excelDateToJSDate(student.endDate)

      }));

      console.log(students);

      this.studentService.setStudents(students);

      alert('Excel Uploaded Successfully');

      this.router.navigate(['/students']);

    };

    reader.readAsBinaryString(file);
  }

  excelDateToJSDate(serial: any): string {

    if (typeof serial === 'string') {
      return serial;
    }

    const excelStartDate = new Date(1899, 11, 30);

    const date = new Date(
      excelStartDate.getTime() + serial * 24 * 60 * 60 * 1000
    );

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

}
