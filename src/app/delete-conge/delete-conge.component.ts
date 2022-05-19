import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListeConges } from '../agent/mesdemandes/mesdemandes.component';

@Component({
  selector: 'app-delete-conge',
  templateUrl: './delete-conge.component.html',
  styleUrls: ['./delete-conge.component.css']
})
export class DeleteCongeComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteCongeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListeConges, private httpClient: HttpClient) { }
 

  onNoClick(): void {
    this.dialogRef.close();
  }

}
