import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AuthModule} from "../auth/auth.module";
import {ProductModule} from "../product/product.module";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AuthModule,
    ProductModule,
    RouterModule

  ]
})
export class HomeModule {
}
