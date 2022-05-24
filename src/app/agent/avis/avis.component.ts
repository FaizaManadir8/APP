import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Compte } from 'src/app/login/login.component';
import { HttpClient } from '@angular/common/http';
export interface Avis {
  dateDemande: Date;
  dateDebut: Date;
  dateReprise: Date;
  matricule: number;
  nom: string;
  prenom: string;
  grade: string;
  fonction: string;
  id: number;
}

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  avisForm!: FormGroup;
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

  newAvis() {
    console.log('avis form', this.avisForm.value);
    const avis = this.httpClient.post(
      'http://localhost:8080/avis/save',
      this.avisForm.value
    );
    avis.subscribe(
      (conge: any) => {
        console.log('avis', avis);
        this.isPassed = true;
        this.success = 'avis crée avec succès';
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
    this.avisForm = this.formBuilder.group({
      // id: '',
      dateDemande: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateReprise: ['', Validators.required],
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      grade: ['', Validators.required],
      fonction: ['', Validators.required],
      // interimaire: ['', Validators.required],
      id: this.compte.id, 
    });
  }

}
