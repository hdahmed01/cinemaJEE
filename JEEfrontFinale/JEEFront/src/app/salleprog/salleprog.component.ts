import { Component } from '@angular/core';
import { Film } from '../films/film';
import { OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ListSalleProgService } from '../services/salleprog/list-salle-prog.service';
import {DeleteSalleProgService} from '../services/salleprog/delete-salle-prog.service';
import { ListFilmsService } from '../services/film/list-films.service';
import { ListSallesService } from '../services/salle/list--salles.service';
import { PostSalleProgService } from '../services/salleprog/post-salle-prog.service';
import { Salleprog } from './salleprog';


@Component({
  selector: 'app-salleprog',
  templateUrl: './salleprog.component.html',
  styleUrl: './salleprog.component.css'
})
export class SalleprogComponent implements OnInit {
  salles: any[]=[];
    visible: boolean = false;
    editvisible: boolean = false;
    removevisible: boolean = false; 
    films!:any[];
    sal!:any[];
    selectedfilm:any;
    selectedsalle:any;
    condition:boolean=true;
    selectedSalleProg: Salleprog = { id_salleprog: 0, film: { id_film: 0, nom: '' }, salle: { id_salle: 0, nom: '',capacite:0,adresse:'' } };
  
    showDialog() {
        this.visible = true;
    }
    showDialogEdit(salleprog: Salleprog) {
      this.selectedSalleProg = { ...salleprog };
      this.editvisible = true;
    }
    showDialogRemove() {
      this.removevisible = true;}
  
      constructor(private listsalleprogservice: ListSalleProgService,private deletesalleprog:DeleteSalleProgService,private confirmationService:ConfirmationService,private messageService:MessageService,private listfilmservice :ListFilmsService,private listSalleservice: ListSallesService,private postsalle:PostSalleProgService ) {}
      loadservice() {
        this.listsalleprogservice.getSalleProgsWithAxios().then((data) => {
          this.salles = data; // Liste de salleprog
          console.log('Salles programmées (salleprog):', this.salles);
      
          // Charger les salles et filtrer celles qui ne sont pas dans salles (salleprog)
          this.listSalleservice.getSallesWithAxios().then((data) => {
            this.sal = data.filter((salle) => 
              !this.salles.some((salleProg) => salleProg.salle.id_salle === salle.id_salle)
            );
            console.log('Salles disponibles non programmées :', this.sal);
          }).catch((error) => {
            console.error('Erreur lors du chargement des salles :', error);
          });
        }).catch((error) => {
          console.error('Erreur lors du chargement des salles programmées :', error);
        });
      
        this.listfilmservice.getFilmsWithAxios().then((data) => {
          this.films = data;
          console.log(this.films);
      });
    }
    updateCondition() {
      this.condition = (this.selectedfilm==null || this.selectedsalle==null);
    }
  
      ngOnInit() {
        this.loadservice();
      }
  
      addsalleprog(film: any,salle:any) {
        
        this.postsalle.createSalleProg({film:film,salle:salle}).subscribe({
          next: (response) => console.log('Film créé avec succès :', response),
          error: (error) => console.error('Erreur lors de la création du film :', error),
        });
        this.visible = false
        this.loadservice();
        window.location.reload();
      }
  
      
      delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      confirm2(event: Event, id: number) {
        this.confirmationService.confirm({
          target: event.target as EventTarget,
          message: 'Are you sure you want to delete this salleProg?',
          icon: 'pi pi-exclamation-circle',
          accept: () => {
            this.deletesalleprog.deleteSalleProg(id).subscribe({
              next: (response) => {
                console.log('Film supprimé avec succès', response);
                this.messageService.add({
                  severity: 'success',
                  summary: 'Deleted',
                  detail: 'Film has been deleted successfully.',
                  life: 2000,
                })
                this.delay(3000);
                this.loadservice(); 
                window.location.reload();
              },
              error: (err) => {
                console.error('Erreur lors de la suppression du film', err);
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: 'An error occurred while deleting the film.',
                  life: 3000,
                });
              }
            });
          },
          reject: () => {
            this.messageService.add({
              severity: 'info',
              summary: 'Rejected',
              detail: 'You have rejected the deletion.',
              life: 3000,
            });
          }
        });
      }
  

}
