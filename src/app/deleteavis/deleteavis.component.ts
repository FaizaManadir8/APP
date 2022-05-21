import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListeAvis } from '../agent/avisretour/avisretour.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deleteavis',
  templateUrl: './deleteavis.component.html',
  styleUrls: ['./deleteavis.component.css']
})
export class DeleteavisComponent {


  constructor(
    public dialogRef: MatDialogRef<DeleteavisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListeAvis, private httpClient: HttpClient) { }
 

  onNoClick(): void {
    this.dialogRef.close();
  }


  

}
