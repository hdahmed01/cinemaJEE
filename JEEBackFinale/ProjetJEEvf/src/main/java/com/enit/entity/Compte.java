package com.enit.entity;

import java.io.Serializable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;

@Entity
@Table(name = "COMPTES")
@NamedQueries({
    @NamedQuery(name = "findAllComptes", query = "SELECT c FROM Compte c"),
    @NamedQuery(name = "findCompteByName", query = "SELECT c FROM Compte c WHERE c.name = :cname"),
    @NamedQuery(name = "findCompteById", query = "SELECT c FROM Compte c WHERE c.id = :cid")
})
public class Compte implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;
    private String password;
    private float solde;

    public Compte() {}

    public Compte(String name) {
        this.name = name;
    }

    public Compte(String name, String password, float solde) {
        this.name = name;
        this.password = password;
        this.solde = solde;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getSolde() {
        return solde;
    }

    public void setSolde(float solde) {
        this.solde = solde;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Compte [id=" + id + ", name=" + name + "]";
    }
}