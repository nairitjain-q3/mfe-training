import { NgModule } from "@angular/core";
import { Feature1Component } from "./feature1.component";
import { Feature1RoutingModule } from "./feature1-routing.module";

@NgModule({
    declarations: [
      Feature1Component
    ],
    imports: [
        Feature1RoutingModule
    ],
    providers: []
  })
  export class Feature1Module { }