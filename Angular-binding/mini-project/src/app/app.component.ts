import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Obagwono Oghomone';
  isEmpty = false;

  printText(){
    console.log('Hey there!')

  }
}
