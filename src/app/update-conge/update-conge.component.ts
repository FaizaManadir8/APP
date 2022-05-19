import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListeConges } from '../agent/mesdemandes/mesdemandes.component';

@Component({
  selector: 'app-update-conge',
  templateUrl: './update-conge.component.html',
  styleUrls: ['./update-conge.component.css']
})
export class UpdateCongeComponent  {

 
  constructor(
    public dialogRef: MatDialogRef<UpdateCongeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListeConges, private httpClient :HttpClient
    ) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

}
