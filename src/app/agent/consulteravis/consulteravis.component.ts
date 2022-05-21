import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Avis } from '../avis/avis.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-consulteravis',
  templateUrl: './consulteravis.component.html',
  styleUrls: ['./consulteravis.component.css']
})
export class ConsulteravisComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<ConsulteravisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Avis, private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
