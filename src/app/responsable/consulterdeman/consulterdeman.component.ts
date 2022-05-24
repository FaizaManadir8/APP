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
  conge;
  clickedAccept=new Array();
  isAccepted;
  success;
  error;
  constructor(
    public dialogRef: MatDialogRef<ConsulterdemanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Conge, private httpClient: HttpClient) { }
 
    ngOnInit(): void {
     
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  accept(conge: Conge) {
    // console.log('conge', conge, 'i', i);
    this.httpClient
      .put('http://localhost:8080/conges/accepter', conge)
      .subscribe(
        (result) => {
          this.conge = result;
          this.clickedAccept[conge.id] = true;
          this.isAccepted = true;
          this.success = "Vous avez  accepté le congé " + conge.id;
          this.ngOnInit();
          console.log("success");
          
        },
        (error1) => {
          console.log('error', error1);
          this.error = error1.error.message;
        }
      );
  }
}
