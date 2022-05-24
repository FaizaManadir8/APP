import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListeDecision } from '../responsable/lesdecisions/lesdecisions.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deletdecision',
  templateUrl: './deletdecision.component.html',
  styleUrls: ['./deletdecision.component.css']
})
export class DeletdecisionComponent  {

  constructor(public dialogRef: MatDialogRef<DeletdecisionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListeDecision, private httpClient: HttpClient) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  
  

}
