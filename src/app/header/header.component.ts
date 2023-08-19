import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  // Other properties and methods...
  menu: any; // or the appropriate type
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
