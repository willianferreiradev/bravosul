import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentTokenData = this.authService.currentTokenData;
    if (currentTokenData && currentTokenData.jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentTokenData?.jwt}`
        }
      });
    }
    return next.handle(request);
  }
}
