import { Component, OnInit } from '@angular/core';
import { ListSeanceService } from '../services/seance/list-seance.service';
import { Seance } from '../seance/seance';
import { PostReserverService } from '../services/reserver/post-reserver.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrl: './reserver.component.css'
})
export class ReserverComponent implements OnInit{
  seances: any[]=[];
  slectedSeance !:Seance;
  isPasswordVisible: boolean = false;
  reserverVisibilty: boolean = false;
  compteName:any;
  password:any;

  constructor(private listseance: ListSeanceService,private reserverService : PostReserverService, private messageService: MessageService) {}

showDialogDebiter(sc: Seance) {
    this.slectedSeance = { ...sc };
    this.reserverVisibilty = true;
  }


  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  ngOnInit(): void {
    this.loadservice();
    console.log(this.seances);
    
     }
  
         loadservice() {
          this.listseance.getSeancesWithAxios().then((data) => {
            this.seances = data; 
            console.log('Salles programmées (salleprog):', this.seances);
          }).catch((error) => {
            console.error('Erreur lors du chargement des salles programmées :', error);
          });
        
          
       
      }




      scrollLeft(containerId: string): void {
        const container = document.getElementById(containerId);
        if (container) {
          container.scrollBy({ left: -300, behavior: 'smooth' });
        }
      }
    
      scrollRight(containerId: string): void {
        const container = document.getElementById(containerId);
        if (container) {
          container.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
      reserveMovie(): void {


        let str: string =this.slectedSeance.id_seance.toString();


         const debite = { name: this.compteName, password: this.password,id:str}
        this.reserverService.reserver(debite).subscribe({
          next: (response) => {

            this.messageService.add({
              severity: 'success',
              summary: 'success reservation',
              detail: 'la reservation a etait effectuer avec succes.',
              life: 2000,
            })



            console.log('Compte mis à jour avec succès', response);
            
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'An error occurred while reservation.',
              life: 2000,
            })
            console.error('Erreur lors de la mise à jour du Compte', err);
          },
        });

        console.log(`Réservation demandée pour le film: `);
       



        this.reserverVisibilty=false;
        this.compteName="";
        this.password="";
        this.loadservice();
        //window.location.reload();
      }
}
