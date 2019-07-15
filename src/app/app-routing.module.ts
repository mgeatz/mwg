import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResumeComponent} from "./resume/resume.component";
import {HomeComponent} from "./home/home.component";
import {OnetwentyComponent} from "./onetwenty/onetwenty.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'onetwenty',
    component: OnetwentyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
