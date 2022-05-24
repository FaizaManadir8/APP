import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Decision } from '../ajouterdecision/ajouterdecision.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulterdecision',
  templateUrl: './consulterdecision.component.html',
  styleUrls: ['./consulterdecision.component.css']
})
export class ConsulterdecisionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConsulterdecisionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Decision, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
