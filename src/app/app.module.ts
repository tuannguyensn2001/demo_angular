import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from "./modules/auth/auth.module";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './modules/home/pages/home/home.component';
import {HomeModule} from "./modules/home/home.module";
import {HeaderComponent} from './components/header/header.component';
import {ProductModule} from "./modules/product/product.module";
import {CartModule} from "./modules/cart/cart.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    ProductModule,
    CartModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
