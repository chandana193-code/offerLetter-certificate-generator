import {Component, ElementRef, ViewChild} from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-letter-preview',
  templateUrl: './offer-letter-preview.component.html',
  styleUrls: ['./offer-letter-preview.component.css']
})
export class OfferLetterPreviewComponent {

  student: any;

  @ViewChild('offerLetter')
  offerLetter!: ElementRef;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.student =
      this.studentService.getSelectedStudent();

  }

  ngAfterViewInit(): void {

    setTimeout(() => {

      this.downloadPDF();

    },1000);

  }

  downloadPDF() {

    const DATA =
      this.offerLetter.nativeElement;

   html2canvas(DATA,{

    scale: window.devicePixelRatio * 2,

    useCORS:true,

    allowTaint:true,

    backgroundColor:"#ffffff",

    logging:false,

    imageTimeout:0,

    scrollX:0,

    scrollY:0

}).then(canvas=>{

      const pdf = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

const pageWidth = pdf.internal.pageSize.getWidth();
const pageHeight = pdf.internal.pageSize.getHeight();

const imgData = canvas.toDataURL('image/png', 1.0);

pdf.addImage(
  imgData,
  'PNG',
  0,
  0,
  pageWidth,
  pageHeight,
  undefined,
  'FAST'
);

pdf.save(`${this.student.studentName}_OfferLetter.pdf`);

this.router.navigate(['/students']);


    });

  }

}