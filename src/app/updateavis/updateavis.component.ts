import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListeAvis } from '../agent/avisretour/avisretour.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updateavis',
  templateUrl: './updateavis.component.html',
  styleUrls: ['./updateavis.component.css']
})
export class UpdateavisComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <UpdateavisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListeAvis, private httpClient :HttpClient) 
    { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
