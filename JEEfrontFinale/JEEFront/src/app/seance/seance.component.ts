import { Component } from '@angular/core';

import { ListSeanceService } from '../services/seance/list-seance.service';
import { PostSeanceService } from '../services/seance/post-seance.service';
import { ListSalleProgService } from '../services/salleprog/list-salle-prog.service'; 
import { Salleprog } from '../salleprog/salleprog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Seance } from './seance';
import { DeleteSeanceService } from '../services/seance/delete-seance.service';
import { PutSeanceService } from '../services/seance/put-seance.service';



@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrl: './seance.component.css'
})
export class SeanceComponent {
    seances: any[]=[];
    visible: boolean = false;
    editvisible: boolean = false;
    removevisible: boolean = false; 
    salleprogs:any[]=[];
    crud:Seance={id_seance:0,horaire:'',tarif:0,places:0, salleprog:{id_salleprog:0,film:{id_film:0,nom:''},salle:{id_salle:0,nom:'',capacite:0,adresse:''}}};
    
    condition:boolean=true;
    selectedSalleProg!: any //= { id_salleprog: 0, film: { id_film: 0, nom: '' }, salle: { id_salle: 0, nom: '',capacite:0,adresse:'' } };
    selectedseance:Seance=this.crud;
      showDialog() {
          this.visible = true;
      }
      showDialogEdit(seance: Seance) {
        this.selectedseance = { ...seance };
        this.editvisible = true;
      }
      showDialogRemove() {
        this.removevisible = true;}
    
        constructor(private putseance :PutSeanceService,private deleteseance: DeleteSeanceService,private listseance: ListSeanceService,private confirmationService:ConfirmationService,private messageService:MessageService,private listsalleprogservice :ListSalleProgService,private postseance:PostSeanceService ) {}
        loadservice() {
          this.listseance.getSeancesWithAxios().then((data) => {
            this.seances = data; 
            console.log('Salles programmées (salleprog):', this.seances);
          }).catch((error) => {
            console.error('Erreur lors du chargement des salles programmées :', error);
          });
        
          this.listsalleprogservice.getSalleProgsWithAxios().then((data) => {
            this.salleprogs = data;
            console.log(this.salleprogs);
        });
      }
      updateCondition() {
        this.condition = (this.selectedSalleProg==null);
      }
    
        ngOnInit() {
          this.loadservice();
        }
        updateSalle(seance:Seance){this.putseance.updateSeance(this.selectedseance).subscribe({
          next: (response) => {
            console.log('salle mis à jour avec succès', response);
            this.editvisible = false;
            this.loadservice();
            window.location.reload();
          },
          error: (err) => {
            console.error('Erreur lors de la mise à jour du salle', err);
          }
        });
        
      }

        
    
        addseance(horaire: string, places: number, tarif: number, salleprog: any) {
          console.log({horaire:horaire,tarif:tarif,places:places, salleProg:salleprog});
          debugger;
          this.postseance.createSeance({horaire:horaire,tarif:tarif,places:places, salleProg:salleprog}).subscribe({
            next: (response) => console.log('seance créé avec succès :', response),
            error: (error) => console.error('seance lors de la création du film :', error),
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
              this.deleteseance.deleteSeance(id).subscribe({
                next: (response) => {
                  console.log('Film supprimé avec succès', response);
                  this.messageService.add({
                    severity: 'success',
                    summary: 'Deleted',
                    detail: 'seance has been deleted successfully.',
                    life: 2000,
                  })
                  this.delay(3000);
                  this.loadservice(); 
                  window.location.reload();
                },
                error: (err) => {
                  console.error('Erreur lors de la suppression du seance', err);
                  this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'An error occurred while deleting the seance.',
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
