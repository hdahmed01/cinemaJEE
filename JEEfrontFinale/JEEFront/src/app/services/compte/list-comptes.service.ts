import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../../compte/compte';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ListComptesService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/comptes';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les compte
  getCompte(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  async getCompteWithAxios(): Promise<any[]> {
    try {
      const response = await axios.get(this.apiUrl);
      //console.log('Récupération des compte avec Axios', response.data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des compte avec Axios', error);
      throw error;
    }
  }
}
