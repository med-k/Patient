import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientsComponent } from './patients/patients.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { VisitComponent } from './visit/visit.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    AddpatientComponent,
    UpdatepatientComponent,
    VisitComponent,
    AcceuilComponent,
    PatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
