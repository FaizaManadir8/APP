import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListeDecision } from '../responsable/lesdecisions/lesdecisions.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updatedecision',
  templateUrl: './updatedecision.component.html',
  styleUrls: ['./updatedecision.component.css']
})
export class UpdatedecisionComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<UpdatedecisionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListeDecision, private httpClient :HttpClient) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
