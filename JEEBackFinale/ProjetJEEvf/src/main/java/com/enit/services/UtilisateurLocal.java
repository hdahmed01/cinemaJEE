package com.enit.services;

import com.enit.entity.Seance;
import com.enit.servicesImpl.UtilisateurBean;

import jakarta.ejb.Local;

@Local
public interface UtilisateurLocal {
	 public void init(String name, String passwd) ; 
	    
	    public String getName();
	    
	    public float getsolde();
	    
	    public void debite(float f);

		void reserve(int id);

}
