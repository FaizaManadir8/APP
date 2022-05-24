import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { HttpClient } from '@angular/common/http';
import { Conge } from 'src/app/agent/congeadministratif/congeadministratif.component';

@Component({
  selector: 'app-consulterdeman',
  templateUrl: './consulterdeman.component.html',
  styleUrls: ['./consulterdeman.component.css']
})
export class ConsulterdemanComponent  {
  constructor(
    public dialogRef: MatDialogRef<ConsulterdemanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Conge, private httpClient: HttpClient) { }
 
    ngOnInit(): void {
     
    }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
