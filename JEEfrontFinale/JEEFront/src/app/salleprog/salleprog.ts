import { Film } from '../films/film';
import { Salle } from '../salle/salle';
export class Salleprog {
    id_salleprog!: number;
    film!: Film;
    salle!: Salle;
  }