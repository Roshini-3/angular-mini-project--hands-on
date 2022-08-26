import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//import { CloginService } from '../clogin.service';
import { CloginService } from 'src/services/clogin.service';


@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css']
})
export class CloginComponent implements OnInit {
  LoginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private loginService: CloginService, private router: Router) {}

  ngOnInit(): void {}

  async userLogin(user: any) {
    console.log(user.value);
    await this.loginService
      .createUser({ email: user.value.email, loginTime: new Date() })
      .subscribe((data: any) => {
        console.log(data);
        sessionStorage.setItem('email', user.value.email);
        this.router.navigate(['/dashboard']);
      });
  }
}

