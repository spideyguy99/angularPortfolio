import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {AboutComponent} from "./about/about.component";
import {ResumeComponent} from "./resume/resume.component";

const routes: Routes = [
  {path:"", redirectTo:"/about", pathMatch:"full"},
  {path:"about", component:AboutComponent, pathMatch:"full"},
  {path:"resume", component:ResumeComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
