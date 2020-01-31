import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LaunchComponent } from './pages/launch/launch.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'launch', component: LaunchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
