import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/login/login.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profilchef',
  templateUrl: './profilchef.component.html',
  styleUrls: ['./profilchef.component.css']
})
export class ProfilchefComponent implements OnInit {

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
