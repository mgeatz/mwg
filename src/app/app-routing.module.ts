import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResumeComponent} from "./resume/resume.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'resume'
  },
  {
    path: 'resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
