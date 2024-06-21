import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";

const NO_AUTH_ENDPOINTS = [
  '/auth/login',
  // '/auth/register'
];

@Injectable()
export class AuthHandlingInterceptor implements HttpInterceptor {



  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('authToken');
    const role = sessionStorage.getItem('role');

    const isNoAuthEndpoint = NO_AUTH_ENDPOINTS.some(url => req.url.includes(url));
    console.log('Received token:', token);
    console.log('role',role );
    if (token && !isNoAuthEndpoint) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });

      return next.handle(cloned).pipe(
        catchError(error => {
          if (error.status === 401) {
       //     sessionStorage.removeItem('authToken');
            this.router.navigate(['/login']);
          }
          return throwError(error);
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
