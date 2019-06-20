import { Component } from '@angular/core';
import { UsdaService } from "./services/usda.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  info = 'Enter a 2-digit code for a US state.';
  usdata = undefined;

  constructor(private usdaService: UsdaService) {
  }

  //This is the form submission which will grab the average age per a specific state
  //User submits state code, calls usda Service which gets age of farmers in that state
  onClickSubmit(data) {
    alert("Entered State code: " + data.state);
    this.usdata = this.usdaService.getAge(data.state);
  }
};

//This calls the usda Service and gets us our states and their average farmer age
//GET rid of this and just have form
//getUsdata(): void {
//this.usdaService.getUsdata()
//.subscribe(states => {
//this.states = states;
//console.log(`State/Age: ${this.states}`)
//});
//}

//When app starts, show all data
//Get rid of this and instead just make the form visible
//ngOnInit() {
//this.getUsdata();
//}

