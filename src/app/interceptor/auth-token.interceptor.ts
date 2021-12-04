import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser = this.auth.getUser();
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: 'Bearer '+currentUser.token
                }
            });
        }
    return next.handle(request);
  }
}
