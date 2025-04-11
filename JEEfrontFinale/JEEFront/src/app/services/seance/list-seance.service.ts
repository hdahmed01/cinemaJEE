import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ListSeanceService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/seances';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les senaces
  getSeances(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  async getSeancesWithAxios(): Promise<any[]> {
    try {
      const response = await axios.get(this.apiUrl);
      //console.log('Récupération des films avec Axios', response.data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des seances avec Axios', error);
      throw error;
    }
  }
}
