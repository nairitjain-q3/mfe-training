import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Feature1Component } from "./feature1.component";

const routes: Routes = [
    {
        path: "feature1",
        component: Feature1Component
    },
    {
        path: "",
        redirectTo: "feature1",
        pathMatch: "full"
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule { }