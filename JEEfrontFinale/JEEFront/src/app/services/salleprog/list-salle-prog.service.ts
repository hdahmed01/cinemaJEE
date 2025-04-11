import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salleprog } from '../../salleprog/salleprog';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ListSalleProgService {

  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/salleprogs';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les salleprog
  getSallleProgs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  async getSalleProgsWithAxios(): Promise<Salleprog[]> {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des films avec Axios', error);
      throw error;
    }
  }
}
