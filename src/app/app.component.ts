import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Terreni 5G ' + VERSION.major;

  constructor( private router: Router) { 
    
  }

  ngOnInit(){

  }
}
