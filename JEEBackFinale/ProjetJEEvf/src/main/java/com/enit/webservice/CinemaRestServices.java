package com.enit.webservice;

import java.io.StringReader;
import java.util.HashSet;
import java.util.Set;

import com.enit.entity.Compte;
import com.enit.entity.Film;
import com.enit.entity.Salle;
import com.enit.entity.SalleProg;
import com.enit.entity.Seance;
import com.enit.services.CinemaLocal;
import com.enit.services.UtilisateurLocal;
import com.enit.services.UtilisateurRemote;
import com.enit.servicesImpl.CinemaBean;
import com.enit.servicesImpl.UtilisateurBean;

import jakarta.ejb.EJB;
import jakarta.ejb.Stateless;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.jws.WebParam;
import jakarta.jws.WebService;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Stateless
@Path("/cinemaREST")
public class CinemaRestServices {
	@GET
	@Path("/ping")
	@Produces(MediaType.APPLICATION_JSON)
	public String ping() {
	    return "Service is running!";
	}
	
	@EJB
    CinemaLocal cinemaDAO;
	
//	@EJB
//	UtilisateurLocal userDAO;
	
	

    // 2. GET - Lister tous les films
    @GET
    @Path("/films")
    @Produces(MediaType.APPLICATION_JSON)
    public Set<Film> getAllFilms() {
        return cinemaDAO.list();
    }

    // 3. GET - Trouver des films par un motif (pattern)
    @GET
    @Path("/films/pattern/{pattern}")
    @Produces(MediaType.APPLICATION_JSON)
    public Set<Film> getFilmsByPattern(@PathParam("pattern") String pattern) {
        return cinemaDAO.findByPattern(pattern);
    }

    // 4. GET - Trouver un film par ID
    @GET
    @Path("/film/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Film getFilmById(@PathParam("id") int id) {
        return cinemaDAO.findFilm(id);
    }

    // 5. POST - Créer un film
    @POST
    @Path("/film")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Film createFilm( String name) {
    	 JsonObject jsonObject = Json.createReader(new StringReader(name)).readObject();
    	    name = jsonObject.getString("name");
  
        return cinemaDAO.createFilm(name);
    }

    // 6. PUT - Mettre à jour un film existant
    @PUT
    @Path("/film")
    @Consumes(MediaType.APPLICATION_JSON)
    public void updateFilm(Film film) {
        cinemaDAO.update(film);
    }

    // 7. DELETE - Supprimer un film par ID
    @DELETE
    @Path("/film/{id}")
    public void deleteFilm(@PathParam("id") int id) {
        Film film = cinemaDAO.findFilm(id);
        if (film != null) {
            cinemaDAO.remove(film); 
        }
    }

    // 8. GET - Lister toutes les salles de programmation
    @GET
    @Path("/salleprogs")
    @Produces(MediaType.APPLICATION_JSON)
    public Set<SalleProg> getAllSalleProg() {
        return cinemaDAO.getAllSalleProg();
    }

    // 9. POST - Réserver une place pour une séance
   
    
    
    
//    @POST
//    @Path("/reserve")
//    @Consumes(MediaType.APPLICATION_JSON)
//    public void reserveSeat(@WebParam(name = "seance") Seance seance, @WebParam(name = "user") UtilisateurBean utilisateur) {
//        cinemaDAO.reserve(seance, utilisateur);
//    }

    // 10. GET - Obtenir le tarif d'une séance
    @GET
    @Path("/tarif/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public float getTarif(@PathParam("id") int id) {
        return cinemaDAO.getTarif(id);
    }
    //crud salle

    @GET
    @Path("/salles")
    @Produces(MediaType.APPLICATION_JSON)
    public Set<Salle> getAllSalles() {
        return cinemaDAO.listSalle();
    }

    @GET
    @Path("/salle/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Salle getSalleById(@PathParam("id") int id) {
        return cinemaDAO.findSalle(id);
    }

    @POST
    @Path("/salle")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Salle createSalle(Salle salle) {
        return cinemaDAO.createSalle(salle.getNom(), salle.getAdresse(), salle.getCapacite());
    }

    @PUT
    @Path("/salle")
    @Consumes(MediaType.APPLICATION_JSON)
    public void updateSalle(Salle salle) {
        cinemaDAO.update(salle);
    }

    @DELETE
    @Path("/salle/{id}")
    public void deleteSalle(@PathParam("id") int id) {
        Salle salle = cinemaDAO.findSalle(id);
        if (salle != null) {
            cinemaDAO.remove(salle);
        }
    }

    // Seance CRUD

    @GET
    @Path("/seances")
    @Produces(MediaType.APPLICATION_JSON)
    public Set<Seance> getAllSeances() {
        return cinemaDAO.listSeance();
    }

    @GET
    @Path("/seance/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Seance getSeanceById(@PathParam("id") int id) {
        return cinemaDAO.findSeance(id);
    }

    @POST
    @Path("/seance")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Seance createSeance(Seance seance) {
        return cinemaDAO.createSeance(seance.getHoraire(), seance.getPlaces(), seance.getTarif(),seance.getSalleProg());
    }

    @PUT
    @Path("/seance")
    @Consumes(MediaType.APPLICATION_JSON)
    public void updateSeance(Seance seance) {
        cinemaDAO.update(seance);
    }

    @DELETE
    @Path("/seance/{id}")
    public void deleteSeance(@PathParam("id") int id) {
        Seance seance = cinemaDAO.findSeance(id);
        if (seance != null) {
            cinemaDAO.remove(seance);
        }
    }

    // SalleProg CRUD

    @GET
    @Path("/salleprogs")
    @Produces(MediaType.APPLICATION_JSON)
    public Set<SalleProg> getAllSalleProgs() {
        return cinemaDAO.listSalleprog();
    }

    @GET
    @Path("/salleprog/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public SalleProg getSalleProgById(@PathParam("id") int id) {
        return cinemaDAO.findSalleprog(id);
    }

    @POST
    @Path("/salleprog")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public SalleProg createSalleProg(SalleProg salleProg) {
        return cinemaDAO.createSalleProg(salleProg.getFilm(), salleProg.getSalle(), salleProg.getSeances());
    }

    @PUT
    @Path("/salleprog")
    @Consumes(MediaType.APPLICATION_JSON)
    public void updateSalleProg(SalleProg salleProg) {
        cinemaDAO.update(salleProg);
    }

    @DELETE
    @Path("/salleprog/{id}")
    public void deleteSalleProg(@PathParam("id") int id) {
        SalleProg salleProg = cinemaDAO.findSalleprog(id);
        if (salleProg != null) {
            cinemaDAO.remove(salleProg);
        }
    }
    
    //crud Compte
    @GET
    @Path("/comptes")
    @Produces(MediaType.APPLICATION_JSON)
    public Set<Compte> getAllComptes() {
        return cinemaDAO.listcompte();
    }

    // 2. GET - Trouver un compte par ID
    @GET
    @Path("/compte/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Compte getCompteById(@PathParam("id") int id) {
        return cinemaDAO.findcompte(id);
    }

    // 3. POST - Créer un compte
    @POST
    @Path("/compte")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Compte createCompte(String compteData) {
        JsonObject jsonObject = Json.createReader(new StringReader(compteData)).readObject();
        String name = jsonObject.getString("name");
        String password = jsonObject.getString("password");
        return cinemaDAO.createCompte(name, password);
    }

    // 4. PUT - Mettre à jour un compte existant
    @PUT
    @Path("/compte")
    @Consumes(MediaType.APPLICATION_JSON)
    public void updateCompte(Compte compte) {
        cinemaDAO.update(compte);
    }

    // 5. DELETE - Supprimer un compte par ID
    @DELETE
    @Path("/compte/{id}")
    public void deleteCompte(@PathParam("id") int id) {
        Compte compte = cinemaDAO.findcompte(id);
        if (compte != null) {
            cinemaDAO.remove(compte);
        }
    }
    
    //5 .Put -debiter un montant vers le compte de l'utilisateur
    @PUT
    @Path("/compteDebiter")
    @Consumes(MediaType.APPLICATION_JSON)
    public void debiter(String compteData) {
//    	JsonObject jsonObject = Json.createReader(new StringReader(compteData)).readObject();
//        String name1 = jsonObject.getString("name");
//        String password1 = jsonObject.getString("password");
//        float montant=(float) jsonObject.getJsonNumber("montant").doubleValue();
//        userDAO.init(name1, password1);
//        userDAO.debite(montant);
    }
       
}
