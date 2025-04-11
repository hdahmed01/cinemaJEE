package com.enit.servicesImpl;

//import java.sql.Date;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;

import com.enit.services.CinemaLocal;
import com.enit.services.CinemaRemote;
import com.enit.services.UtilisateurLocal;
import com.enit.entity.Compte;
import com.enit.entity.Film;
import com.enit.entity.Salle;
import com.enit.entity.SalleProg;
import com.enit.entity.Seance;
import com.enit.services.UtilisateurRemote;

import jakarta.ejb.Stateless;

@Stateless
public class CinemaBean implements CinemaLocal,CinemaRemote{
	@PersistenceContext 
	private EntityManager em = null ;

	public CinemaBean() {
		super();
	}

	@Override
	public Set<Film> list() {
		Query query=em.createQuery("select c from Film c");
		List<Film> filmList=(List<Film>)query.getResultList();
		 return new HashSet<>(filmList);
	}

	@Override
	public Set<Film> findByPattern (String pattern){

		Query q = em.createNamedQuery("findFilmByPattern");
		q.setParameter("cname", "%"+pattern+ "%");
		List<Film> filmList = (List<Film>)q.getResultList();
		  return new HashSet<>(filmList); 
	}

	@Override
	public Film findFilm(int id) {
		 return em.find(Film.class, id); 
	}

	@Override
	 public void reserve(Seance seance, UtilisateurBean utilisateur) {
        int placesDemandées = seance.getPlaces();
        int placesDisponibles = seance.getSalleProg().getSalle().getCapacite(); 

        if (utilisateur.getsolde() < seance.getTarif()) {
            throw new RuntimeException("Solde insuffisant");  
        }

        if (placesDisponibles < placesDemandées) {
            throw new RuntimeException("Plus de places disponibles");  
        }

        // Traitement de la réservation   
        
        utilisateur.retirer(seance.getTarif());
        seance.setPlaces(placesDemandées+1);
        em.merge(seance);
        em.merge(utilisateur);
        
       
    }

	@Override
	public Set<SalleProg> getAllSalleProg() {
		Query req=em.createQuery("select c from SalleProg c");
		List<SalleProg> reqlist=(List<SalleProg>)req.getResultList();
		Set<SalleProg> reqset= (Set<SalleProg>) reqlist.stream().collect(Collectors.toSet());
		return reqset;
	}

	@Override
	public Film createFilm(String name) {
		Film F= new Film(name);
		em.persist(F);
		return F;
		
	}

	@Override
	public void update(Film f) {
		em.merge(f);
	}

	@Override
	public float getTarif(int id) {
		Seance i = em.find(Seance.class, id);
		System.out.println(i.getTarif());
		return i.getTarif();
		

	}
	@Override
	public float getTarif() {
		Seance i = new Seance();
		return i.getTarif();

	}
	
	public void remove(Film f) {
		em.remove(f);
	}
	
	
	//crud salle
	@Override
	public Set<Salle> listSalle() {
		Query query=em.createQuery("select c from Salle c");
		List<Salle> sallelist=(List<Salle>)query.getResultList();
		 return new HashSet<>(sallelist);
	}
	@Override
	public Salle createSalle(String nom, String adresse, int capacite) {
		Salle s= new Salle(nom,adresse,capacite);
		em.persist(s);
		return s;
		
	}
	@Override
	public void update(Salle f) {
		em.merge(f);
	}
	@Override
	public void remove(Salle f) {
		em.remove(f);
	}
	@Override
	public Salle findSalle(int id) {
		 return em.find(Salle.class, id); 
	}
	
	//crud seance
	@Override
	public Set<Seance> listSeance() {
		Query query=em.createQuery("select c from Seance c");
		List<Seance> sallelist=(List<Seance>)query.getResultList();
		 return new HashSet<>(sallelist);
	}
	@Override
	public Seance createSeance(Date horaire, int places, float tarif,SalleProg salle) {
		Seance S= new Seance(horaire,places,  tarif);
		S.setSalleProg(salle);
		em.persist(S);
		return S;
	}
	@Override
	public void update(Seance f) {
		em.merge(f);
	}
	@Override
	public void remove(Seance f) {
		em.remove(f);
	}
	@Override
	public Seance findSeance(int id) {
		 return em.find(Seance.class, id); 
	}
	
	//crud salleprog 
	@Override
	public Set<SalleProg> listSalleprog() {
		Query query=em.createQuery("select c from SalleProg c");
		List<SalleProg> sallelist=(List<SalleProg>)query.getResultList();
		 return new HashSet<>(sallelist);
	}
	@Override
	public SalleProg createSalleProg(Film f,Salle s,List<Seance> seances) {
		SalleProg S= new SalleProg();
		S.setFilm(f);
		S.setSalle(s);
		S.setSeances(seances);
		em.persist(S);
		return S;
	}
	@Override
	public void update(SalleProg s) {
		em.merge(s);
	}
	@Override
	public void remove(SalleProg f) {
		em.remove(f);
	}
	@Override
	public SalleProg findSalleprog(int id) {
		return em.find(SalleProg.class, id);
	}
	//crud compte
	
	@Override
	public Set<Compte> listcompte() {
		Query query=em.createQuery("select c from Compte c");
		List<Compte> sallelist=(List<Compte>)query.getResultList();
		 return new HashSet<>(sallelist);
	}
	@Override
	public Compte createCompte(String name, String password) {
		Compte S= new Compte(name,password,0);
		em.persist(S);
		return S;
	}
	public void update(Compte s) {
		em.merge(s);
	}
	@Override
	public void remove(Compte f) {
		em.remove(f);
	}
	@Override
	public Compte findcompte(int id) {
		return em.find(Compte.class, id);
	}
	
	

	
	
}
