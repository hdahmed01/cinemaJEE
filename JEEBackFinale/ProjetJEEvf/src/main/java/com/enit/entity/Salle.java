package com.enit.entity;

import java.io.Serializable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.OneToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class Salle implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_salle;

    @Column(length = 30)
    private String nom;

    @Column(length = 30)
    private String adresse;

    private int capacite;

    public Salle() {}

    public Salle(String nom, String adresse, int capacite) {
        
        this.nom = nom;
        this.adresse = adresse;
        this.capacite = capacite;
    }

    @OneToOne
    @JoinColumn(name = "ID_SALLE")
    public int getId_salle() {
        return id_salle;
    }

    public void setId_salle(int id_salle) {
        this.id_salle = id_salle;
    }

    @Column(name = "NOM_SALLE")
    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    @Column(name = "ADRESSE")
    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public int getCapacite() {
        return capacite;
    }

    public void setCapacite(int capacite) {
        this.capacite = capacite;
    }

    @Override
    public String toString() {
        return "Salle [id_salle=" + id_salle + ", nom=" + nom + ", adresse=" + adresse + ", capacite=" + capacite + "]";
    }
}
