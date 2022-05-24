import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Compte } from 'src/app/login/login.component';
import { HttpClient } from '@angular/common/http';

export interface Personne {
  nom: string ;
  prenom: string;
  mail: string ;
  telephone: string ;
  matricule: string ;
  fnction: string;
  service: string ;
  etat: string;
  adresse:string
  grade: string;
  id :number;
  image :string;
  cin :string
}

@Component({
  selector: 'app-ajouteragent',
  templateUrl: './ajouteragent.component.html',
  styleUrls: ['./ajouteragent.component.css']
})
export class AjouteragentComponent implements OnInit {
  
  personneForm!: FormGroup;
  error: string | undefined;
  success!: string;
  isPassed: boolean = false;
  id!: number;
  compte!: Compte;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  newPersonne() {
    console.log('personne form', this.personneForm.value);
    const personne = this.httpClient.post(
      'http://localhost:8080/user/save',
      this.personneForm.value
    );
    personne.subscribe(
      (personne: any) => {
        console.log('personne', personne);
        this.isPassed = true;
        this.success = 'agent crée avec succès';
      },
      (error) => {
        console.log('error', error);
        this.isPassed = false;
        this.error = error.error.message;
      }
    );
  }

  private createForm() {
    if (localStorage.getItem('user')) {
      this.compte = JSON.parse(localStorage.getItem('user')!);
      console.log(this.compte.id);
    }
    this.personneForm = this.formBuilder.group({
      // id: '',
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      fonction: ['', Validators.required],
      service: ['', Validators.required],
      matricule: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      grade: ['', Validators.required],
      image: ['', Validators.required],
      id: this.compte.id, 
    });
  }


}
