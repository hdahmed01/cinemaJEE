import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/userREST/login';

  constructor(private http: HttpClient) { }
  login(name:string,password:string): Observable<any> {
    return this.http.post(this.apiUrl,{
      "name":name,
      "password":password
  } );
  }
}
