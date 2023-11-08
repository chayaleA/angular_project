import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student.model';
import { FormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html'
})
export class StudentDetailsComponent {
  @Input()
  student: Student | undefined;

  @Output()
  onSaveNewStudent: EventEmitter<Student> = new EventEmitter();

  newstudent: Student = new Student();

  id = 0;
  firstName = "";
  lastname = "";
  address = "";
  phone = "";
  active = false;
  avergeMarks = 0;
  departureDate?: Date;
  description = "";

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  setLastName(lastname: string) {
    this.lastname = lastname;
  }
  setPhone(phone: string) {
    this.phone = phone;
  }
  setAddress(address: string) {
    this.address = address;
  }
  setActive(active: string) {
    this.active = Boolean(active);
  }
  setId(id: string) {
    this.id = parseInt(id);
  }
  setDescription(description: string) {
    this.description = description;
  }
  setAvergeMarks(avergeMarks: string) {
    this.avergeMarks = parseInt(avergeMarks);
  }
  //  setDepartureDate(departureDate:string){
  //   this.departureDate = Date(departureDate);
  //  }

  SaveStudent(s: Student) {
    if (this.id == 0) {
      this.firstName = (this.firstName == s.firstName ? this.firstName : s.firstName);
      this.lastname = this.lastname == s.lastname ? this.lastname : s.lastname;
      this.address = this.address == s.address ? this.address : s.address;
      this.phone = this.phone == s.phone ? this.phone : s.phone;
      this.active = this.active == s.active ? this.active : s.active;
      this.description =  this.phone == String(s.description) ? this.description : String(s.description);
      this.id =  s.id;
      this.avergeMarks = this.avergeMarks == s.avergeMarks ? this.avergeMarks : s.avergeMarks;
    }
      this.newstudent.firstName = this.firstName;
      this.newstudent.lastname = this.lastname;
      this.newstudent.address = this.address;
      this.newstudent.phone = this.phone;
      this.newstudent.description = this.description;
      this.newstudent.id = this.id;
      this.newstudent.avergeMarks = this.avergeMarks;
      this.newstudent.active = this.active;
    //this.newstudent.departureDate =this.departureDate;
  

    this.onSaveNewStudent.emit(this.newstudent);
  }

  @Output()
  firstFocus: EventEmitter<any> = new EventEmitter();
  flagFirstFocus: boolean = false;

  focusEvent() {
    if (!this.flagFirstFocus) {
      this.firstFocus.emit();
      this.flagFirstFocus = true;
    }
  }
}
