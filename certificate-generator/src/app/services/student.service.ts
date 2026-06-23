import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   private students: any[] = [];

  private selectedStudent: any;

  setStudents(data: any[]) {
    this.students = data;
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
