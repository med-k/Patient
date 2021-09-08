import { UserService } from './../service/user.service';
import { User } from './../models/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  
  constructor(private logservice:UserService, private router:Router) { }
  
  UserName:string;
  PassWord:string;
  users : User [];
  loginVal:boolean ;


  ngOnInit(): void {
    this.loginVal=false;
    this.logservice.GetUsers().subscribe(data=>this.users=data);
  }
 
  login (UserName:string, PassWord:string) { 

    for (let i of this.users) {

      if (UserName === i.username  && PassWord === i.password ) 
      {
        const id:number=i.id;
        this.router.navigate(['patients']);
      } 
      else this.loginVal = true ;
  }

}

}
