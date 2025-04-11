import { Component } from '@angular/core';
import { Compte } from './compte';
import { ListComptesService } from '../services/compte/list-comptes.service';
import { PostCompteService } from '../services/compte/post-compte.service';
import { PutCompteService } from '../services/compte/put-compte.service';
import { DeleteCompteService } from '../services/compte/delete-film.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { response } from 'express';
import { PutDebiteService } from '../services/compte/put-debite.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent {

  comptes: Compte[] = [];
  visible: boolean = false;
  editvisible: boolean = false;
  removevisible: boolean = false
  compteName!: string;
  password!: string;
  isPasswordVisible: boolean = false;
  selectedCompte: Compte = { id: 0, name: '', password: '', solde: 0 };
  debiterVisibilty: boolean = false;
  montant: number = 0;
  passwordAverfier!: string;
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  showDialog() {
    this.visible = true;
  }
  showDialogEdit(compte: Compte) {
    this.selectedCompte = { ...compte };
    this.editvisible = true;
  }
  showDialogRemove() {
    this.removevisible = true;
  }
  showDialogDebiter(compte: Compte) {
    this.selectedCompte = { ...compte };
    this.debiterVisibilty = true;
  }
  constructor(private listCompteservice: ListComptesService, private postCompte: PostCompteService, private putCompte: PutCompteService, private deleteCompte: DeleteCompteService, private confirmationService: ConfirmationService, private messageService: MessageService,private debiterService:PutDebiteService ) { }
  loadservice() {
    this.listCompteservice.getCompteWithAxios().then((data) => {
      this.comptes = data;
      console.log(data);
      console.log(this.compteName);
    });
  }
  ngOnInit() {
    this.loadservice();

  }

  addCompte(CompteName: string, Cpassword: string) {
    const newCompte = { name: CompteName, password: Cpassword }
    this.postCompte.createCompte(newCompte).subscribe(
      {
        next: (response) => console.log('Compte cree avec succes', response),
        error: (error) => console.error('Erreur lors de la création du Compte:', error),
      });
    this.visible = false
    this.loadservice();
    window.location.reload();
  }

  updateCompte(compte: any): void {
    this.putCompte.updateCompte(compte).subscribe({
      next: (response) => {
        console.log('Compte mis à jour avec succès', response);
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour du Compte', err);
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
      message: 'Are you sure you want to delete this Compte?',
      icon: 'pi pi-exclamation-circle',
      accept: () => {
        this.deleteCompte.deleteCompte(id).subscribe({
          next: (response) => {
            console.log('Compte supprimé avec succès', response);
            this.messageService.add({
              severity: 'success',
              summary: 'Deleted',
              detail: 'Compte has been deleted successfully.',
              life: 2000,
            })
            this.delay(3000);
            this.loadservice();
            window.location.reload();
          },
          error: (err) => {
            console.error('Erreur lors de la suppression du Compte', err);
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'An error occurred while deleting the Compte.',
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
  debite() {
    // console.log(typeof this.selectedCompte.password);
    // console.log(typeof this.passwordAverfier);
    if (this.montant > 0 && this.passwordAverfier === this.selectedCompte.password) {
      const c1 = this.comptes.find(c => c.id === this.selectedCompte.id);
      if (c1) {
        let str: string =this.montant.toString();
        const newCompte = { name: c1.name, password: c1.password,montant:str}
        this.debiterService.debiter(newCompte).subscribe({
          next: (response) => {
            console.log('Compte mis à jour avec succès', response);
            this.loadservice();
            window.location.reload();
          },
          error: (err) => {
            console.error('Erreur lors de la mise à jour du Compte', err);
          }
        });
        //c1.solde += this.montant;
      }
      else {
        console.log("compte not found")
      }

    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Échec',
        detail: 'Montant invalide ou mot de passe incorrect.',
        life: 2000,
      })
      console.log('Échec : montant invalide ou mot de passe incorrect.');
    }
    this.debiterVisibilty = false;
    this.montant = 0;
    this.passwordAverfier = "";

  }
  


}

