import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteSalleProgService {

  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/salleprog';  

  constructor(private http: HttpClient) { }

  // Méthode pour supprimer un salleprog
  deleteSalleProg(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;  
    return this.http.delete(url);
  }
}
