package com.enit.controller;

import java.io.IOException;
import java.util.List;

import com.enit.entity.Film;
import com.enit.entity.Salle;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet(name = "cinelaServlet", urlPatterns = { "*/cinema", "*.do" })
public class CinelaServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /*@PersistenceContext
    private EntityManager em;

    @Override
    public void init(ServletConfig config) throws ServletException{
        super.init(config);
        // Exemple d'initialisation
        System.out.println("CinelaServlet is initializing...");
    }*/

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Récupérer la liste des films et des salles
        /*List<Film> films = em.createQuery("SELECT f FROM Film f", Film.class).getResultList();
        List<Salle> salles = em.createQuery("SELECT s FROM Salle s", Salle.class).getResultList();

        // Ajouter les données à la requête
        request.setAttribute("films", films);
        request.setAttribute("salles", salles);*/

        // Rediriger vers la vue JSP
       request.getRequestDispatcher("film_salle.jsp").forward(request, response);
   }

    /*@Override
    @Transactional
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");

        if ("createFilm".equals(action)) {
            createFilm(request);
        } else if ("editFilm".equals(action)) {
            editFilm(request);
        } else if ("createSalle".equals(action)) {
            createSalle(request);
        } else if ("editSalle".equals(action)) {
            editSalle(request);
        }

        // Redirection après traitement
        response.sendRedirect("cinela");
    }

    private void createFilm(HttpServletRequest request) {
        String filmName = request.getParameter("filmName");
        Film film = new Film(filmName);
        em.persist(film);
    }

    private void editFilm(HttpServletRequest request) {
        int filmId = Integer.parseInt(request.getParameter("filmId"));
        String filmName = request.getParameter("filmName");
        Film film = em.find(Film.class, filmId);
        if (film != null) {
            film.setNom(filmName);
            em.merge(film);
        }
    }

    private void createSalle(HttpServletRequest request) {
        String salleName = request.getParameter("salleName");
        String salleAddress = request.getParameter("salleAddress");
        int salleCapacity = Integer.parseInt(request.getParameter("salleCapacity"));
        Salle salle = new Salle(0, salleName, salleAddress, salleCapacity);
        em.persist(salle);
    }

    private void editSalle(HttpServletRequest request) {
        int salleId = Integer.parseInt(request.getParameter("salleId"));
        String salleName = request.getParameter("salleName");
        String salleAddress = request.getParameter("salleAddress");
        int salleCapacity = Integer.parseInt(request.getParameter("salleCapacity"));
        Salle salle = em.find(Salle.class, salleId);
        if (salle != null) {
            salle.setNom(salleName);
            salle.setAdresse(salleAddress);
            salle.setCapacite(salleCapacity);
            em.merge(salle);
        }
    }*/
}
