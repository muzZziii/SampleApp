import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchComponent } from './pages/launch/launch.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientListComponent } from './component/patient-list/patient-list.component';
import { PatientQueryComponent } from './component/patient-query/patient-query.component';
import { PatientQueryListComponent } from './component/patient-query-list/patient-query-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/material.service';
import { NbThemeModule, NbLayoutModule, NbTreeGridComponent, NbTreeGridModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    HomeComponent,
    PatientListComponent,
    PatientQueryComponent,
    PatientQueryListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbTreeGridModule,
    NbCardModule,
    NbIconModule,
    NbLayoutModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
