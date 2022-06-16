import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username! : string;
  password! : string;
  constructor(private authservice:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  
  checkLogin() {
    alert("logged in");  
    (this.authservice.authenticateLogin(this.username, this.password).subscribe({
      next: (res:any)=>{
          console.log(res);
          console.log(this.username);
          console.log(this.password)
          this.router.navigate(['/estock/home']);
         
      },
      
  })
    )
    

  }
  

}
