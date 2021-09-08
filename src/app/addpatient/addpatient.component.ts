import { AppserviceService } from './../service/appservice.service';
import { Patient } from './../models/patient';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {
  patient : Patient =new Patient ();
  
  constructor(private _appservice:AppserviceService, private router:Router) { }
  
  AddPatient(){
    if(this.patient.sexe==="M")
    {this.patient.image = "../assets/images/homme.jpg"}
    else if(this.patient.sexe==="F")
    {this.patient.image = "../assets/images/femme.jpg"}
    this.patient.number_of_visits=0;
    this._appservice.AddPatient(this.patient).subscribe(res => this.router.navigate(['patients']));
  }
  
  PatientForm : FormGroup;
  ngOnInit(): void {
   
    this.PatientForm = new FormGroup({
      first_name: new  FormControl('',Validators.required),
      last_name: new  FormControl('',Validators.required),
      email: new  FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      address: new FormControl('', Validators.required),
      sexe: new  FormControl('',[Validators.required,Validators.pattern("^[M|F]{1}$")])
    })
  }

}
