import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-query',
  templateUrl: './patient-query.component.html',
  styleUrls: ['./patient-query.component.scss']
})
export class PatientQueryComponent implements OnInit {
  @Input() kind: string;
  @Input() expanded: boolean;
  constructor() { }

  ngOnInit() {
  }


  isDir(): boolean {
    return this.kind === 'dir';
  }
}
