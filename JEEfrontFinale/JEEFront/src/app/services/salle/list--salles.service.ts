import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from '../../salle/salle';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ListSallesService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/salles';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les films
  getSalle(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  async getSallesWithAxios(): Promise<Salle[]> {
    try {
      const response = await axios.get(this.apiUrl);
      //console.log('Récupération des salle avec Axios', response.data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des salle avec Axios', error);
      throw error;
    }
  }
}
