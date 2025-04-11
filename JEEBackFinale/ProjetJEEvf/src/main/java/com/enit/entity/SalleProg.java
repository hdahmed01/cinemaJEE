package com.enit.entity;

import java.io.Serializable;

import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import java.util.List;

@Entity
public class SalleProg implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_salleprog;

    @ManyToOne
    @JoinColumn(name = "id_film")
    private Film film;

    @OneToMany(mappedBy = "salleProg")
    @JsonbTransient
    private List<Seance> seances;

    
    @OneToOne
    @JoinColumn(name = "id_salle") 
    private Salle salle;

    public SalleProg() {}

    public SalleProg(int id_salleprog) {
        this.id_salleprog = id_salleprog;
    }

    public int getId_salleprog() {
        return id_salleprog;
    }

    public void setId_salleprog(int id_salleprog) {
        this.id_salleprog = id_salleprog;
    }

    public Film getFilm() {
        return film;
    }

    public void setFilm(Film film) {
        this.film = film;
    }

    public List<Seance> getSeances() {
        return seances;
    }

    public void setSeances(List<Seance> seances) {
        this.seances = seances;
    }

    // Méthodes pour la relation OneToOne avec Salle
    public Salle getSalle() {
        return salle;
    }

    public void setSalle(Salle salle) {
        this.salle = salle;
    }

    @Override
    public String toString() {
        return "SalleProg [id_salleprog=" + id_salleprog + ", salle=" + salle + "]";
    }
}
