import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  email: string = '';
  password: string = '';
  userName: string = '';
  number: string = '';
  confirmPassword: string = '';
  onSubmit() {
    if(this.email != "" && this.password != "" && this.userName != "" && this.number != "" && this.confirmPassword != "") {
      this.router.navigate(['/login']);
      console.log(this.email);
      console.log(this.password);
    }
    else{
      alert("Invalid email or password");
    }
  }
}
