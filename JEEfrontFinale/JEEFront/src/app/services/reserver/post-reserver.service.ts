import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostReserverService {

  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/reserve';  
    
      constructor(private http: HttpClient) { }
    
      // Méthode pour mettre à jour un compte
      reserver(compte: any): Observable<any> {
        return this.http.post(this.apiUrl, compte);
      }
}
