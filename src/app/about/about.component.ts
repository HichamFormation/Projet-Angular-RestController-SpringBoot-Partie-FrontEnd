import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   
  info={
    name:'hicham',
    email:'hicham@gmail.com'
  }
  constructor() { }

  ngOnInit() {
  }

}
