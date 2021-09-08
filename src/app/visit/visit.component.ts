import { Patient } from './../models/patient';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {
 
  @Input () patient  : Patient ; 
  @Output () AddVisit : EventEmitter <Patient> = new EventEmitter <Patient> ();  
 
  constructor() { }

 

  ngOnInit(): void {
  }

  Onclick () : void { 

    this.AddVisit.emit(this.patient);

  }

}
