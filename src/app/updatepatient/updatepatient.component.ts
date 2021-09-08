import { AppserviceService } from '../service/appservice.service';
import { Patient } from '../models/patient';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent implements OnInit {

  patient : Patient;
  
  constructor(private _appservice : AppserviceService, private router:Router, private ActivatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(res =>this._appservice.GetPatientById(Number(res.get('id'))).subscribe(res => this.patient=res));
  }
  Update(patient : Patient):void{
    this._appservice.UpdatePatient(this.patient.id,patient).subscribe( res => this.router.navigate(['patients']));
  }
}
