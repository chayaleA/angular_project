import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TaskListComponent } from './task-list/task-list.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
    declarations: [AppComponent, TaskListComponent, ListStudentsComponent, StudentDetailsComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})

export class AppModule {
   
}