package com.enit.entity;

import java.io.Serializable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.OneToMany;
import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.Column;
import java.util.List;

@Entity
@NamedQueries({
    @NamedQuery(name = "findFilmByPattern", query = "SELECT c FROM Film c WHERE c.nom like :cname"),
})
public class Film implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "idFilm")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_film;

    @Column(name = "nomFILM", length = 30)
    private String nom;

    @OneToMany(mappedBy = "film")
    @JsonbTransient
    private List<SalleProg> salleProg;

    public Film() {}

    public Film(String nom) {
        this.nom = nom;
    }

    public Film(int id_film, String nom) {
        this.id_film = id_film;
        this.nom = nom;
    }

    public int getId_film() {
        return id_film;
    }

    public void setId_film(int id_film) {
        this.id_film = id_film;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public List<SalleProg> getSalleProg() {
        return salleProg;
    }

    public void setSalleProg(List<SalleProg> salleProg) {
        this.salleProg = salleProg;
    }
}
