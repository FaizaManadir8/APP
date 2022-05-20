import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Conge } from '../congeadministratif/congeadministratif.component';

@Component({
  selector: 'app-consulterdemande',
  templateUrl: './consulterdemande.component.html',
  styleUrls: ['./consulterdemande.component.css']
})
export class ConsulterdemandeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConsulterdemandeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Conge, private httpClient: HttpClient) { }
 
    ngOnInit(): void {
     
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
