package com.enit.webservice;

import java.io.StringReader;

import com.enit.entity.Seance;
import com.enit.services.UtilisateurLocal;

import jakarta.ejb.EJB;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/userREST")
public class UtilisateurRestService {
	@GET
	@Path("/ping")
	@Produces(MediaType.APPLICATION_JSON)
	public String ping() {
	    return "Service 2 is running!";
	}
	
	@EJB
	UtilisateurLocal userDAO;
	
	 //5 .Put -debiter un montant vers le compte de l'utilisateur
    @PUT
    @Path("/compteDebiter")
    @Consumes(MediaType.APPLICATION_JSON)
    public void debiter(String compteData) {
    	JsonObject jsonObject = Json.createReader(new StringReader(compteData)).readObject();
        String name1 = jsonObject.getString("name");
        String password1 = jsonObject.getString("password");
//        float montant= jsonObject.getJsonNumber("montant").doubleValue();
        float montant=Float.parseFloat(jsonObject.getString("montant")) ;

        userDAO.init(name1, password1);
        userDAO.debite(montant);
    }
    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    public void login(String compteData) {
    	JsonObject jsonObject = Json.createReader(new StringReader(compteData)).readObject();
        String name1 = jsonObject.getString("name");
        String password1 = jsonObject.getString("password");
        userDAO.init(name1, password1);
    }
    
    
    @PUT
    @Path("/reserve")
    @Consumes(MediaType.APPLICATION_JSON)
    public void reserveSeat(String compteData) {
    	JsonObject jsonObject = Json.createReader(new StringReader(compteData)).readObject();
        String name1 = jsonObject.getString("name");
        String password1 = jsonObject.getString("password");
        int SeanceID = Integer.parseInt(jsonObject.getString("id"));
        userDAO.init(name1, password1);
        userDAO.reserve(SeanceID);
    }
    
	
	
}
