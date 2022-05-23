import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Compte } from 'src/app/login/login.component';

export interface Decision {
  dateDemande: Date;
  dateDepart: Date;
  dateRetour: Date;
  nombreDeJours: number;
  type: string;
  interimaire: string;
  adresseConge: string;
  etat: string;
  matricule: number;
  nom: String;
  prenom: String;
  fonction: String;
  grade: String;
  telephone: number;
  email: String;
  id: number;
}
@Component({
  selector: 'app-ajouterdecision',
  templateUrl: './ajouterdecision.component.html',
  styleUrls: ['./ajouterdecision.component.css']
})
export class AjouterdecisionComponent implements OnInit {

  decisionForm!: FormGroup;
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
    //call available interimaires
  }

  newDecision() {
    console.log('decision form', this.decisionForm.value);
    const decision = this.httpClient.post(
      'http://localhost:8080/decision/save',
      this.decisionForm.value
    );
    decision.subscribe(
      (decision: any) => {
        console.log('decision', decision);
        this.isPassed = true;
        this.success = 'decision crée avec succès';
      },
      (error) => {
        console.log('error', error);
        this.isPassed = false;
        this.error = error.error.message;
      }
    );
  }
  // getUserLoggedIn() {
  //   if (localStorage.getItem('user')) {
  //     this.compte = JSON.parse(localStorage.getItem('user')!);
  //   }
  // }
  private createForm() {
    if (localStorage.getItem('user')) {
      this.compte = JSON.parse(localStorage.getItem('user')!);
      console.log(this.compte.id);
    }
    this.decisionForm = this.formBuilder.group({
      // id: '',
      dateDemande: ['', Validators.required],
      dateDepart: ['', Validators.required],
      dateRetour: ['', Validators.required],
      nombreDeJours: ['', Validators.required],
      type: ['', Validators.required],
      adresseConge: ['', Validators.required],
      // interimaire: ['', Validators.required],
      etat: 'en attente',
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      fonction: ['', Validators.required],
      grade: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      id: this.compte.id, 
    });
  }
}
