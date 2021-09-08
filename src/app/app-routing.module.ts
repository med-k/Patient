import { PatientComponent } from './patient/patient.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { PatientsComponent } from './patients/patients.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', component : AcceuilComponent},
  {path : 'patients', component : PatientsComponent},
  {path : 'addpatient', component : AddpatientComponent},
  {path : 'updatepatient/:id', component : UpdatepatientComponent},
  {path : 'acceuil', component : AcceuilComponent},
  {path : 'patient/:id', component : PatientComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
