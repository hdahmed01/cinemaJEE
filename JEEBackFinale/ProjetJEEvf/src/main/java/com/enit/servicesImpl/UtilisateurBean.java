package com.enit.servicesImpl;

import java.util.List;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;

import com.enit.services.UtilisateurLocal;
import com.enit.services.UtilisateurRemote;
import com.enit.entity.Compte;
import com.enit.entity.Seance;

import jakarta.ejb.Stateful;
import jakarta.ejb.TransactionAttribute;
import jakarta.ejb.TransactionAttributeType;
@Stateful
public class UtilisateurBean implements UtilisateurLocal,UtilisateurRemote  {
	@PersistenceContext
    private EntityManager em = null;
    private int user_id;
    
    public UtilisateurBean() {
        super();
    }
    
@TransactionAttribute(TransactionAttributeType.REQUIRED)
public void debite(float somme) {
    float solde;
    solde = getsolde();
    if( solde+somme <= 0 ){
         //throw new SoldeNegatifException();
    }else{
         Compte compte;
         Query q = em.createNamedQuery("findCompteById");
         q.setParameter("cid",user_id);
		List<Compte> res = (List<Compte>)(q.getResultList());
         if(res.size()==0){
	         //throw new UserNotFoundException();
        }else{
	          compte = res.get(0);
	          compte.setSolde(solde+somme);
	          em.merge(compte);
	    }
	} 
}
public void retirer(float somme) {
    float solde;
    solde = getsolde();
    if( solde-somme <= 0 ){
         //throw new SoldeNegatifException();
    }else{
         Compte compte;
         Query q = em.createNamedQuery("findCompteById");
         q.setParameter("cid",user_id);
		List<Compte> res = (List<Compte>)(q.getResultList());
         if(res.size()==0){
	         //throw new UserNotFoundException();
        }else{
	          compte = res.get(0);
	          compte.setSolde(solde-somme);
	          em.merge(compte);
	    }
	} 
}

	public String getName() {
	     String nom = null;
	     Query q = em.createNamedQuery("findCompteById");
	     q.setParameter("cid",user_id);
	     List<Compte> res = (List<Compte>)(q.getResultList());
	     if(res.size()==0){
            	//throw new UserNotFoundException();
	     }else{
	            nom = res.get(0).getName();
	     }
	      return nom;
	}
	
	//authentification
	public void init(String name, String passwd)  {
	    Query q = em.createNamedQuery("findCompteByName");
	    q.setParameter("cname",name);
	    @SuppressWarnings("unchecked")
		List<Compte> res = (List<Compte>)q.getResultList();
	    if (res==null || res.size()==0) {
	       // throw new UserNotFoundException();
	    	throw new RuntimeException("UserNotFoundException");
	    }else{
	        if (res.get(0).getName().equals(name) && res.get(0).getPassword().equals(passwd)){
	            user_id = res.get(0).getId();
	            
	        }else {
	            //throw new UserNotFoundException();
	        	throw new RuntimeException("UserNotFoundException");
	        }
	}
	}
	
	
	
	public float getsolde() {
	    float sld = 0;
	    Query q = em.createNamedQuery("findCompteById");
	    q.setParameter("cid",user_id);
	    List<Compte> res = (List<Compte>)(q.getResultList());
	    if(res.size()==0) {
	       // throw new UserNotFoundException();
	    } 
	    else
        	sld = res.get(0).getSolde();
    	return sld;
	}
	@Override
	 public void reserve(int id) {
		Seance seance=em.find(Seance.class, id); 
       int placesDemandées = seance.getPlaces();
       int placesDisponibles = seance.getSalleProg().getSalle().getCapacite(); 

       if (this.getsolde() < seance.getTarif()) {
           throw new RuntimeException("Solde insuffisant");  
       }

       if (placesDisponibles < placesDemandées) {
           throw new RuntimeException("Plus de places disponibles");  
       }

       // Traitement de la réservation   
       
       this.retirer(seance.getTarif());
       seance.setPlaces(placesDemandées+1);
       em.merge(seance);
       //em.merge(utilisateur);
       
      
   }
	
	

}
