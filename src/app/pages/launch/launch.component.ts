import { Component, OnInit } from '@angular/core';
import { oauth2 as SMART } from 'fhirclient';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    SMART.init({
      iss:
        // tslint:disable-next-line: max-line-length
        'https://launch.smarthealthit.org/v/r3/sim/eyJoIjoiMSIsImIiOiJzbWFydC0xNjQyMDY4IiwiZSI6InNtYXJ0LVByYWN0aXRpb25lci03MTYxNDUwMiJ9/fhir',
    redirectUri: 'test.html',
    clientId: 'whatever',
    scope: 'launch/patient offline_access openid fhirUser',

    // WARNING: completeInTarget=true is needed to make this work in the codesandbox
    // frame. It is otherwise not needed if the target is not another frame or window
    // but since the entire example works in a frame here, it gets confused without
    // setting this!
    completeInTarget: true
    }).then(client => {
      // Fetch MedicationRequest and Patient in parallel to load the app faster
      return Promise.all([
        client.patient.read(),
      ]);
    }).then(patient => {

    }, error => {

    });
  }

}
