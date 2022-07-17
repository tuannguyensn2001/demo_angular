import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../../shared/models/auth";
import {LoginResponse, LoginType} from "../types";
import {BehaviorSubject, flatMap, map, Observable, of} from "rxjs";
import {ResponseType} from "../../../shared/models/common";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: IUser | null = null
  public user$ = new BehaviorSubject<IUser | null>(null);

  constructor(private httpClient: HttpClient) {
  }

  public isAuth() {
    return Boolean(this?.user)
  }

  login(data: LoginType): Observable<IUser> {
    return this.httpClient.post<ResponseType<LoginResponse>>("http://localhost:8000/api/v1/auth/login", data)
      .pipe(
        map(data => {

          localStorage.setItem("accessToken", data.data.access_token)

          this.user = data.data.user

          return data.data.user
        })
      )
  }

  getMe(): Observable<IUser> {
    return this.httpClient.get<ResponseType<IUser>>("http://localhost:8000/api/v1/auth/me", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .pipe(
        map(data => {
          this.user = data.data
          this.user$.next(data.data)
          return data.data
        })
      )
  }

  getUser() {
    return this.user
  }

}
