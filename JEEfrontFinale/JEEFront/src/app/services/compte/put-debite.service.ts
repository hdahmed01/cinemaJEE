import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PutDebiteService {

  
    private apiUrl = 'http://localhost:8080/CinemaExamen/userREST/compteDebiter';  
  
    constructor(private http: HttpClient) { }
  
    // Méthode pour mettre à jour un compte
    debiter(compte: any): Observable<any> {
      return this.http.put(this.apiUrl, compte);
    }
}
