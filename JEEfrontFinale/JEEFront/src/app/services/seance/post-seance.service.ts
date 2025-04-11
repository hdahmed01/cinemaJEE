import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostSeanceService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/seance';

  constructor(private http: HttpClient) { }
  createSeance(seance:any): Observable<any> {
    return this.http.post(this.apiUrl, seance);
  }
}
