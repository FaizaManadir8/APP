import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Decision } from 'src/app/responsable/ajouterdecision/ajouterdecision.component';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DecisionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Decision, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
