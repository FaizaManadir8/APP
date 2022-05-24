import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListePersonne } from '../lesagents/lesagents.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-modifieragent',
  templateUrl: './modifieragent.component.html',
  styleUrls: ['./modifieragent.component.css']
})
export class ModifieragentComponent  {

 
  constructor(
    public dialogRef: MatDialogRef<ModifieragentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListePersonne, private httpClient :HttpClient
    ) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

}
