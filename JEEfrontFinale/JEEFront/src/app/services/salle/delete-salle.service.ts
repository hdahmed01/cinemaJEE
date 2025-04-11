import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeleteSalleService {

  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/salle';  

  constructor(private http: HttpClient) { }

  // Méthode pour supprimer un salle
  deleteSalle(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;  
    return this.http.delete(url);
  }
}
