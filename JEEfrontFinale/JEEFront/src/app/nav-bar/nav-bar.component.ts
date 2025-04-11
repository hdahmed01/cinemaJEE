import { Component } from '@angular/core';
import { LoginService } from '../services/authentification/login.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isLoggedIn: boolean = false;
  visible: boolean = false;
  name: string = '';  
  password: string = '';
  isPasswordVisible: boolean = false;
  constructor(private loginservice:LoginService,private messageService:MessageService) { }

  showDialog() {
    this.visible = true;
}


  ngOnInit(): void {
    // Vérifier l'état de connexion dans localStorage
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  login(): void {
    this.loginservice.login(this.name,this.password).subscribe(({
      next: (response) => {
        console.log('Login  avec succès', response);
        this.messageService.add({
          severity: 'success',
          summary: 'Login',
          detail: 'Login has been effected successfully.',
          life: 2000,
        });
        localStorage.setItem('isLoggedIn', 'true');
        this.isLoggedIn = true;
        this.visible = false;
        // window.location.reload();
      },
      error: (err) => {
        console.error('Erreur lors de login ', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'An error occurred while login. you must delete salleprog first',
          life: 3000,
        });
      }
    }));
  }

  logout(): void {
    // Supprimer l'état de connexion
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }

}
