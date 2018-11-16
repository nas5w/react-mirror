import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  time: object = new Date();
	
	constructor() {
		setInterval((): void => { this.time = new Date() }, 1000);
	}

}
