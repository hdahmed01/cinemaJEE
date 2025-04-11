import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostCompteService {

private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/compte';

  constructor(private http: HttpClient) { }
  createCompte(compte: { name: string,password:string }): Observable<any> {
    return this.http.post(this.apiUrl, compte);
  }}
