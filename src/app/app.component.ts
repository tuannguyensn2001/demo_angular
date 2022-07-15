import {Component, OnInit} from '@angular/core';
import {AuthService} from "./modules/auth/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo_angular';

  public isLoading = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.authService.getMe()
      .subscribe(data => {
        this.isLoading = false;
        console.log(data)
      }, err => {
        console.log(err)
        this.isLoading = false;
      })
  }
}
