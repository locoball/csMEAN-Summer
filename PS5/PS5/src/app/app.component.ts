import { Component } from '@angular/core';
import { DATA } from './MOCK-DATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS5';
  data = DATA;
  info = 'Displaying number of cut christmas trees per state in 2017.'
}
