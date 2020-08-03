import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginData } from '../core/models/LoginData';
import { TokenData } from '../core/models/TokenData';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = `${environment.api}auth/local`;

  constructor(private http: HttpClient) { }

  login(loginData: LoginData): Observable<TokenData> {
    return this.http.post<TokenData>(this.API, loginData)
    .pipe(map(tokenData => this.currentTokenData = tokenData));
  }

  get currentTokenData(): TokenData {
    return JSON.parse(localStorage.getItem('currentTokenData'));
  }

  set currentTokenData(token: TokenData) {
    localStorage.setItem('currentTokenData', JSON.stringify(token));
  }
}
