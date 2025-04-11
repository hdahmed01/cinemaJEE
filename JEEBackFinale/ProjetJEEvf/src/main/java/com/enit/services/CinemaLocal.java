package com.enit.services;

import java.util.Date;
import java.util.List;
import java.util.Set;

import com.enit.entity.Compte;
import com.enit.entity.Film;
import com.enit.entity.Salle;
import com.enit.entity.SalleProg;
import com.enit.entity.Seance;
import com.enit.servicesImpl.UtilisateurBean;

import jakarta.ejb.Local;


@Local
public interface CinemaLocal {
	 // Lister l'ensemble de films disponible au cinema.
    public Set<Film> list ();
     
    // Trouver les films correspondants au pattern 
    public Set<Film> findByPattern (String pattern);
     
    // Trouver un film � partir d'un id.
    public Film findFilm (int id);
    
    // R�server une seance pour un utilisateur.
    public void reserve (Seance seance, UtilisateurBean u);
    
    public Set<SalleProg> getAllSalleProg ();
    public Film createFilm (String name);
    public void update (Film f);
    public float getTarif ();
    //crud salle /salleprog /seance

	public void remove(Film film);

	float getTarif(int id);

	public Set<Salle> listSalle();

	public Salle findSalle(int id);

	public Salle createSalle(String nom, String adresse, int capacite);

	public void remove(Salle salle);

	public Set<Seance> listSeance();

	public Seance findSeance(int id);

	public Seance createSeance(Date horaire, int places, float tarif,SalleProg salle);

	public void remove(Seance seance);

	public SalleProg findSalleprog(int id);

	public Set<SalleProg> listSalleprog();

	public SalleProg createSalleProg(Film film, Salle salle, List<Seance> seances);

	public void update(SalleProg salleProg);

	public void remove(SalleProg salleProg);

	public void update(Salle salle);

	void update(Seance f);

	Set<Compte> listcompte();

	Compte createCompte(String name, String password);

	void remove(Compte f);

	Compte findcompte(int id);

	public void update(Compte compte);


}
