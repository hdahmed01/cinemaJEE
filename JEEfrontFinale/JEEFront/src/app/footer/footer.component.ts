import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email: string = '';
  subscribe() {

    // Check if the email is not empty
    if (this.email) {
      Swal.fire({
        title: 'Success!',
        text: 'Thank you for subscribing to our newsletter!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      // Clear the input field
      this.email = '';
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid email address.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }

}
