export class Salle {
    id_salle: number;
    nom: string;
    adresse: string;
    capacite: number;
  
    constructor(id_film: number,nom: string ,adresse: string, capacite: number) {
      this.id_salle = id_film;
      this.adresse = adresse;
      this.nom = nom;
      this.capacite = capacite;
      }
  }
  