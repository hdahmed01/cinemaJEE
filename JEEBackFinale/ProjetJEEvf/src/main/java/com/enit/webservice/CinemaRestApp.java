package com.enit.webservice;

import java.util.HashSet;
import java.util.Set;

import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;

@ApplicationPath("/") 
public class CinemaRestApp extends Application{
	/*@Override
    public Set<Class<?>> getClasses() {
        final Set<Class<?>> classes = new HashSet<>();
        // Enregistrer la ressource racine
        classes.add(CinemaRestServices.class); 
        return classes;
    }*/

}
