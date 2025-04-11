package com.enit.services;

import java.util.Set;

import com.enit.entity.Film;
import com.enit.entity.SalleProg;
import com.enit.entity.Seance;
import com.enit.servicesImpl.UtilisateurBean;

import jakarta.ejb.Remote;


@Remote
public interface CinemaRemote {
	 // Lister l'ensemble de films disponible au cinema.
    public Set<Film> list ();
     
    // Trouver les films correspondants au pattern donn� en entr�e.
    public Set<Film> findByPattern (String pattern);
     
    // Trouver un film � partir d'un id.
    public Film findFilm (int id);
    
    // R�server une s�ance pour un utilisateur.
    public void reserve (Seance seance, UtilisateurBean u);
    
    public Set<SalleProg> getAllSalleProg ();
    public Film createFilm (String name);
    public void update (Film f);
    public float getTarif ();

}
