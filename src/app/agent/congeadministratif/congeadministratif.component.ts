import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Conge {
  dateDemande: Date;
  dateDebut: Date;
  dateFin: Date;
  nombreDeJours: number;
  type: string;
  interimaire: string;
  adresseConge: string;
  etat: string;
  agent:string;
}
@Component({
  selector: 'app-congeadministratif',
  templateUrl: './congeadministratif.component.html',
  styleUrls: ['./congeadministratif.component.css'],
})
export class CongeadministratifComponent implements OnInit {
  congeForm!: FormGroup;
  error: string | undefined;
  success!: string;
  isPassed: boolean = false;
  id!: number;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    //call available interimaires
  }

  newConge() {
    console.log('conge form', this.congeForm.value);
    const conge = this.httpClient.post( 'http://localhost:8080/conges/save', this.congeForm.value);
        conge.subscribe(
      (conge: any) => {
        console.log('congé', conge);
        this.isPassed = true;
        this.success = 'congé crée avec succès';
      },
      (error) => {
        console.log('error', error);
        this.isPassed = false;
        this.error = error.error.message;
      }
    );
  }
  private createForm() {
    this.congeForm = this.formBuilder.group({
      id: '',
      dateDemande: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      nombreDeJours: ['', Validators.required],
      type: ['', Validators.required],
      adresseConge: ['', Validators.required],
      // interimaire: ['', Validators.required],
      etat: 'en attente',
      agentConserné:""
    });
  }
}
