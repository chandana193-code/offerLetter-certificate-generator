import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { WithoutStampService } from 'src/app/services/without-stamp.service';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
students: any[] = [];

  filteredStudents: any[] = [];

  searchText: string = '';

  constructor(
    private studentService: StudentService,
    private wordService: WordService,
    private withoutStamp: WithoutStampService
  ) {}

  ngOnInit(): void {

    this.students = this.studentService.getStudents();

    this.filteredStudents = [...this.students];

  }

  searchStudent() {

    const search = this.searchText.toLowerCase();

    this.filteredStudents = this.students.filter(student =>

      student.studentName?.toLowerCase().includes(search) ||

      student.lastName?.toLowerCase().includes(search) ||

      student.studentId?.toString().includes(search) ||

      student.role?.toLowerCase().includes(search)

    );

  }

  generateLetter(student: any) {
    this.wordService.generateWord(student);
  }

  withoutStampgenerateLetter(student: any) {
    this.withoutStamp.generateWord(student);
  }
}
