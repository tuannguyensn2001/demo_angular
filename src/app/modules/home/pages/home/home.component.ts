import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private isLoading = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

  }

  isAuth() {
    return this.authService.isAuth()
  }
}
