import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostSalleProgService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/salleprog';

  constructor(private http: HttpClient) { }
  createSalleProg(salleprog: any): Observable<any> {
    return this.http.post(this.apiUrl, salleprog);
  }
}
