import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts:any;
 
  constructor(public http:HttpClient) { }

  ngOnInit() {
  this.getdata

    }
  public getdata(){
    this.http.get("http://localhost:8082/contacts").subscribe(res =>{
      this.contacts=res;
    },err=>{
      console.log(err)
    }
      )
    }
  }