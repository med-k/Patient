import { User } from './../models/user';
import { Patient } from '../models/patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  private url: string = "http://localhost:3000/patient";
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}
  constructor(private http:HttpClient) { }

  // afficher liste patient
  GetAllPatient () : Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url);
}

  // ajout patient
  AddPatient(pat : Patient):Observable<Patient>{
    return this.http.post<Patient>(this.url,pat,this.httpOptions);
  }
  //delete patient
  DeletePatient (myObject: Patient | number): Observable<Patient> {
    const id = typeof myObject ==='number'?myObject : myObject.id;
    return this.http.delete<Patient>(this.url+'/'+id); 
    }
  // update patient
  UpdatePatient(id : number , pat : Patient):Observable<Patient>{
    return this.http.put<Patient>(this.url+'/'+ id , pat ,this.httpOptions);
  }
  // get patient by id
  GetPatientById(id : number):Observable<Patient>{
    return this.http.get<Patient>(this.url+'/'+id);
  }
  // get user
  GetUsers () : Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3000/user");
}
}
