import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListFilmsService } from './list-films.service';
import { Film } from '../../films/film';

describe('ListFilmsService', () => {
  let service: ListFilmsService;
  let httpMock: HttpTestingController;

  // Configurer l'environnement de test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Utilise le module de test HTTP
      providers: [ListFilmsService]
    });
    service = TestBed.inject(ListFilmsService);
    httpMock = TestBed.inject(HttpTestingController); // Utiliser HttpTestingController pour simuler les requêtes HTTP
  });

  // Test : vérifier que le service récupère bien les films
  it('should retrieve films from the API', () => {
    const mockFilms: Film[] = [
      { id_film: 1, nom: 'test22' }
    ];

    // Appeler la méthode du service
    service.getFilms().subscribe((films) => {
      expect(films.length).toBe(1); // Vérifie qu'on a bien 2 films
      expect(films).toEqual(mockFilms); // Vérifie que la réponse est conforme
    });

    // Simuler une requête HTTP avec les données mockées
    const req = httpMock.expectOne('http://localhost:8080/CinemaExamen/cinemaREST/films');
    expect(req.request.method).toBe('GET'); // Vérifie que la méthode HTTP est bien GET
    req.flush(mockFilms); // Simule la réponse du serveur avec les films mockés
  });

  // Assurez-vous que toutes les requêtes HTTP ont été traitées après chaque test
  afterEach(() => {
    httpMock.verify();
  });
});
