import { Component } from '@angular/core';
import { Salle } from './salle';
import { ListSallesService } from '../services/salle/list--salles.service';
import { PostSalleService } from '../services/salle/post-salle.service';
import { PutSalleServiceService } from '../services/salle/put-salle.service';
import { DeleteSalleService } from '../services/salle/delete-salle.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.css'
})
export class SalleComponent {
  salles :Salle[]=[];
  visible: boolean = false;
  editvisible: boolean = false;
  removevisible: boolean = false; 
  salleName!: string;
  salleAddress!:string;
  Sallecapacite!: number;
  selectedSalle: Salle = { id_salle: 0, nom: '',adresse:'',capacite:0 }; 
    showDialog() {
        this.visible = true;
    }
    showDialogEdit(salle :Salle) {
      this.selectedSalle = { ...salle };
      this.editvisible = true;
    }
    showDialogRemove() {
      this.removevisible = true;}
  
      constructor(private listSalleservice: ListSallesService,private postSalle:PostSalleService,private putSalle:PutSalleServiceService,private deleteSalle:DeleteSalleService,private confirmationService:ConfirmationService,private messageService:MessageService ) {}
      loadservice(){
        this.listSalleservice.getSallesWithAxios().then((data) => {
          this.salles = data;
          console.log(this.salleName);
      });
      }
  
      ngOnInit() {
        this.loadservice();
      }
  
      addSalle(SalleName: string,SalleAddress:string,Sallecapacite: number) {
        const newSalle = { nom: SalleName ,adresse: SalleAddress,capacite: Sallecapacite};
        this.postSalle.createSalle(newSalle).subscribe({
          next: (response) => console.log('Salle créé avec succès :', response),
          error: (error) => console.error('Erreur lors de la création du salle:', error),
        });
        this.visible = false
        this.loadservice();
        window.location.reload();
      }


    updateSalle(salle:Salle): void {
      this.putSalle.updateFilm(salle).subscribe({
        next: (response) => {
          console.log('salle mis à jour avec succès', response);
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour du salle', err);
        }
      });
      this.editvisible = false;
      this.loadservice();
      window.location.reload();
    }
    delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    confirm2(event: Event, id: number) {
      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure you want to delete this salle?',
        icon: 'pi pi-exclamation-circle',
        accept: () => {
          this.deleteSalle.deleteSalle(id).subscribe({
            next: (response) => {
              console.log('Salle supprimé avec succès', response);
              this.messageService.add({
                severity: 'success',
                summary: 'Deleted',
                detail: 'salle has been deleted successfully.',
                life: 2000,
              })
              this.delay(3000);
              this.loadservice(); 
              window.location.reload();
            },
            error: (err) => {
              console.error('Erreur lors de la suppression du Salle', err);
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'An error occurred while deleting the salle.',
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
