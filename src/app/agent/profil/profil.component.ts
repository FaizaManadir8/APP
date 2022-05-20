import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/login/login.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  compte! : Compte;
  constructor( private httpClient: HttpClient,) { }

  ngOnInit(): void {
      if (localStorage.getItem('user')) {
        this.compte = JSON.parse(localStorage.getItem('user')!);
        this.getUser();
  }
}

  getUser(){
    this.httpClient.get(`http://localhost:8080/comptes/get/${this.compte.id}`).subscribe((response)=>{
    this.compte=response;
    console.log("response",response)
    });
  }

  }

