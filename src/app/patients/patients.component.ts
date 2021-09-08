import { AppserviceService } from './../service/appservice.service';
import { Patient } from './../models/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  Patients : Patient[];
  Patient : Patient ;
 
  l_n :string;
  f_n :string;

  constructor(private _appservice : AppserviceService) { }

  addvisit (message : Patient) { 
    message.number_of_visits++; 
    this._appservice.UpdatePatient(message.id,message).subscribe(res=>this.GetAllPatient());
  }

 
  ngOnInit(): void {

    this.GetAllPatient(); 
    this.l_n ='';
    this.f_n ='';
  }


  GetAllPatient(){
    this._appservice.GetAllPatient().subscribe((data:Patient[])=>this.Patients=data)
  }

  public DeletePatient(objToDelete : Patient | number): void{
    this._appservice.DeletePatient(objToDelete).subscribe(next => this._appservice.GetAllPatient().subscribe( (data : Patient [] ) => {this.Patients= data}));
  }

  
}
