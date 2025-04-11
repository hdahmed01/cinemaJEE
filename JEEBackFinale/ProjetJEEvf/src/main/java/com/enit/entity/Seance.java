package com.enit.entity;

import java.io.Serializable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import java.util.Date;

@Entity
public class Seance implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_seance;

    private Date horaire;
    private int places;
    private float tarif;

    @ManyToOne
    @JoinColumn(name = "id_salleprog")
    private SalleProg salleProg;

    public Seance() {}

    public Seance(Date horaire, int places, float tarif) {
        this.horaire = horaire;
        this.places = places;
        this.tarif = tarif;
    }

    public int getId_seance() {
        return id_seance;
    }

    public void setId_seance(int id_seance) {
        this.id_seance = id_seance;
    }

    public Date getHoraire() {
        return horaire;
    }

    public void setHoraire(Date horaire) {
        this.horaire = horaire;
    }

    public int getPlaces() {
        return places;
    }

    public void setPlaces(int places) {
        this.places = places;
    }

    public float getTarif() {
        return tarif;
    }

    public void setTarif(float tarif) {
        this.tarif = tarif;
    }

    public SalleProg getSalleProg() {
        return salleProg;
    }

    public void setSalleProg(SalleProg salleProg) {
        this.salleProg = salleProg;
    }

    @Override
    public String toString() {
        return "Seance [id_seance=" + id_seance + ", horaire=" + horaire + ", places=" + places + ", tarif=" + tarif + "]";
    }
}
