import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from './login.service';

export interface Compte {
  id?: number;
  login?: string;
  privilege?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;
  user!: Compte;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {
      this.createForm(); 
  }
  faCoffee = faCoffee;

  ngOnInit(): void {}
  login() {
    this.isLoading = true;
    const login$ = this.httpClient.post(
      'http://localhost:8080/authentification/login',
      this.loginForm!.value
    );

    login$.subscribe(
      (compte: Compte) => {
        this.user = compte;
        this.loginService.setUserLoggedIn(this.user);
        this.router.navigate(['/sidebar'], { replaceUrl: true });
      },
      (error) => {
        this.isLoading = false;
        console.log('error', error);
        this.error = error.error.message;
      }
    );
  }

  checkLocalStorage() {
    if (!localStorage.getItem('user')) {
      this.login();
    } else {
      console.log('localStorage ready!');
    }
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
