import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  teamMembers = [
    { 
      name: 'Lindsay Walton', 
      role: 'CEO', 
      image: 'assets/c6.jfif' 
    },
    { 
      name: 'Courtney Henry', 
      role: 'Designer', 
      image: 'assets/c5.jfif' 
    },
    { 
      name: 'Tom Cook', 
      role: 'Director of Product', 
      image: 'assets/c4.jfif' 
    },
    { 
      name: 'Whitney Francis', 
      role: 'Customer Relations Manager ', 
      image: 'assets/r3.jpg' 
    },
    { 
      name: 'Leonard Krasner', 
      role: 'Cinema Manager', 
      image: 'assets/r4.jpg' 
    },
    { 
      name: 'Floyd Miles', 
      role: ' Marketing and Events Coordinator', 
      image: 'assets/r5.jpg' 
    }
  ];

}
