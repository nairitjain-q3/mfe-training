import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature2Component } from './feature2.component';

const routes: Routes = [
  {
    path: "feature2",
    component: Feature2Component
  },
  {
    path: "",
    redirectTo: "feature2",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }