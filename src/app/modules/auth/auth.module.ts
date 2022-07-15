import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";


const routes : Routes = [
  {
    path: "auth/login",
    component: LoginComponent
  }
]


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AuthService],
})
export class AuthModule { }
