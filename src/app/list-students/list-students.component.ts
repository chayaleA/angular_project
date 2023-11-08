import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
})
export class ListStudentsComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  students: Student[] = [
    {
      id: 123456789,
      firstName: "chaya",
      lastname: "avramovitz",
      address: "bar ilan 18",
      phone: "0548529696",
      active: true,
      avergeMarks: 100,
      description: "I am an amazing girl"
    },
    {
      id: 325449940,
      firstName: "yaeli",
      lastname: "avramovitz",
      address: "bar ilan 18",
      phone: "0548529696",
      active: false,
      avergeMarks: 100,
      departureDate: new Date(2023, 10, 23),
    },
    {
      id: 32544,
      firstName: "pnina",
      lastname: "avramovitz",
      address: "bar ilan 18",
      phone: "0548529696",
      active: true,
      avergeMarks: 100
    }
    ,
    {
      id: 49940,
      firstName: "ruti",
      lastname: "avramovitz",
      address: "bar ilan 18",
      phone: "0548529696",
      active: false,
      avergeMarks: 100,
      departureDate: new Date(2023, 10, 23)
    }

  ]

  deleteStudent(id: number) {
    let i;
    for (i = 0; i < this.students.length; i++)
      if (this.students[i].id == id)
        break;
    this.students.splice(i, 1);
    // let indexToDelete = this.students.indexOf(student);
  }

  selectStudent: Student | undefined;

  showDetails(studentToShow: Student) {
    this.selectStudent = studentToShow;
  }

  ShowNewStudent() {
    this.selectStudent = new Student();
  }

  i:number = 0;
  existStudent:Boolean = false;
  AddNewStudentToList(studentToAdd: Student) { 
    this.existStudent = false;
    for (this.i = 0; this.i < this.students.length; this.i++) {
      if (this.students[this.i].id == studentToAdd.id)
      {
        this.existStudent = true;
        break;
      }   
    }
    if (this.existStudent == false)
      this.students.push(studentToAdd);
    else
    {
      this.students[this.i] = studentToAdd;
    }
       
    this.selectStudent = undefined;
    this.i = 0;
  }

  showDescription() {
    alert("It is your first time doing this, Do you need help?");
  }
}
