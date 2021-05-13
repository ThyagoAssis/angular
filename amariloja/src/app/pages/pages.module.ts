import { NgModule } from "@angular/core";
import { ComponentsModule } from "../components/components.module";
import { HomeComponent } from "./home/home.component";

@NgModule(
  {
    declarations: [HomeComponent],
    imports: [ComponentsModule]
  }
)
export class PagesModule {}
