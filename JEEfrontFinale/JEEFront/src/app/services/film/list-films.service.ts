import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../../films/film';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ListFilmsService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/films';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les films
  getFilms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  async getFilmsWithAxios(): Promise<Film[]> {
    try {
      const response = await axios.get(this.apiUrl);
      //console.log('Récupération des films avec Axios', response.data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des films avec Axios', error);
      throw error;
    }
  }
}
