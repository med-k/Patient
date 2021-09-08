import { AppserviceService } from './../service/appservice.service';
import { Patient } from './../models/patient';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  p : Patient;
  
  
  constructor(private _appservice : AppserviceService, private ActivatedRoute : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(res =>this._appservice.GetPatientById(Number(res.get('id'))).subscribe(res => this.p=res));
  }
  public DeletePatient(p : Patient | number): void{
    this._appservice.DeletePatient(this.p).subscribe(res => this.router.navigate(['patients'])); 
  }
    Onclick () : void { 

      this.p.number_of_visits ++;
      this._appservice.UpdatePatient(this.p.id,this.p).subscribe(res=>this.p=res);
  }

  
}
