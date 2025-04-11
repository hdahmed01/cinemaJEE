import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteCompteService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/compte';  

  constructor(private http: HttpClient) { }

   // Méthode pour supprimer un compte
    deleteCompte(id: number): Observable<any> {
      const url = `${this.apiUrl}/${id}`;  
      return this.http.delete(url);
    }


}
