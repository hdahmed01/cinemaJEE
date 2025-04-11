package com.enit.services;

import jakarta.ejb.Remote;

@Remote
public interface UtilisateurRemote { 
    public void init(String name, String passwd) ; 
    
    public String getName();
    
    public float getsolde();
    
    // Debiter le compte de l'utilisateur
    public void debite(float f);

}
