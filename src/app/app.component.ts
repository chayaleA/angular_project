import { Component } from "@angular/core";

@Component({
    templateUrl: "app.component.html",
    selector: "app-root"

})

export class AppComponent {
    title: string="My classroom";
    currentHour = new Date().getHours() + ":" +new Date().getMinutes() + ":"+ new Date().getSeconds(); 
    time() {
        const currentTime = new Date();
        const currentHour = currentTime.getHours(); 
        if(currentHour>=7&&currentHour<12)
            return "Good Morning";
        if(currentHour>=12&&currentHour<18)
            return "Good Afternoon";
        if(currentHour>=18&&currentHour<24)
            return "Good Evening";
        return "Good Night"; 
                 
      }
}