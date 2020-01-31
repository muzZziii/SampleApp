import { Injectable } from '@angular/core';
import { oauth2 as SMART } from 'fhirclient';
import { Patient } from '../models/patient';
import { of } from 'rxjs';

const date = new Date();
const patients: Array<Patient> = [
    { id: '1', firstName: 'Manie', lastName: 'Bachus',
    query: { id: '1', date: new Date('2020-01-30'), status: {text: 'Discharged', date: new Date()}} },
    { id: '2', firstName: 'Betsy', lastName: 'Mills',
    query: { id: '2', date: new Date('2020-02-10'), status: {text: 'Inpatient', date: new Date()}} },
    { id: '3', firstName: 'Bill', lastName: 'Jones',
    query: { id: '3', date: new Date('2020-02-15'), status: {text: 'Admitted', date: new Date()}} },
    { id: '4', firstName: 'Manie', lastName: 'Bachus',
    query: { id: '4', date: new Date('2020-02-20'), status: {text: 'Discharged', date: new Date()}} },
    { id: '5', firstName: 'Manie', lastName: 'Bachus',
    query: { id: '5', date: new Date('2020-01-21'), status: {text: 'Discharged', date: new Date()}} }
];

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  getPatients() {
      return of(patients);
  }

}
