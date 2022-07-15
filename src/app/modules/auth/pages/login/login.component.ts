import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {LoginType} from "../../types";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    email: ['tuannguyensn2001a@gmail.com', Validators.compose([Validators.email])],
    password: ['java2001', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const data = this.loginForm.value as LoginType
    this.authService.login(data)
      .subscribe(data => {
        this.router.navigate([""])
      })
  }

}
