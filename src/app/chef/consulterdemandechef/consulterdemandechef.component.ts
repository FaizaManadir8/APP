import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Conge } from 'src/app/agent/congeadministratif/congeadministratif.component';
 

@Component({
  selector: 'app-consulterdemandechef',
  templateUrl: './consulterdemandechef.component.html',
  styleUrls: ['./consulterdemandechef.component.css']
})
export class ConsulterdemandechefComponent implements OnInit {
conge;
clickedAccept = new Array();
clickedRefuse = new Array();
isAccepted 
isRefused
success
error
  constructor(
    public dialogRef: MatDialogRef<ConsulterdemandechefComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Conge, private httpClient: HttpClient) { }
 
    ngOnInit(): void {
      this.httpClient
      .get('http://localhost:8080/conges/get')
      .subscribe((response: any) => {
        console.log('response', response);
      });
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
          this.clickedRefuse[conge.id] = false;
          this.isAccepted = true;
          this.isRefused = false;
          this.success = "Vous avez refusé l'événement " + conge.id;
          this.ngOnInit();
        },
        (error1) => {
          console.log('error', error1);
          this.error = error1.error.message;
        }
      );
  }

  refuse(conge: Conge) {
    this.httpClient
      .put('http://localhost:8080/conges/refuser', conge)
      .subscribe(
        (result) => {
          this.conge = result;
          this.success = "Vous avez refusé l'événement " + conge.id;
          this.isAccepted = false;
          this.isRefused = true;
          this.clickedRefuse[conge.id] = true;
          this.clickedAccept[conge.id] = false;
          this.ngOnInit();
        },
        (error1) => {
          console.log('error', error1);
          this.error = error1.error.message;
        }
      );  
  }
}
