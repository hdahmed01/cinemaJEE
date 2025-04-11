import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PutCompteService {


  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/compte';  

  constructor(private http: HttpClient) { }

  // Méthode pour mettre à jour un compte
  updateCompte(compte: any): Observable<any> {
    return this.http.put(this.apiUrl, compte);
  }
}
