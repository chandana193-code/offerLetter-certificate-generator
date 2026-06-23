import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

    private students: any[] = [];

  private selectedStudent: any;

  constructor() {

    const storedStudents = localStorage.getItem('students');

    if (storedStudents) {
      this.students = JSON.parse(storedStudents);
    }

  }

  setStudents(data: any[]) {

    this.students = data;

    localStorage.setItem(
      'students',
      JSON.stringify(this.students)
    );

  }

  getStudents() {
    return this.students;
  }

  setSelectedStudent(student: any) {
    this.selectedStudent = student;
  }

  getSelectedStudent() {
    return this.selectedStudent;
  }
}
