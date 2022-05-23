import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';

import { ModifieragentComponent } from '../modifieragent/modifieragent.component';

export interface ListePersonne {
  id: number;
  mail: string;
  nom: string;
  prenom: string;
  service: string;
  fonction: string;
  grade: string;
  matricule: string;
  adresse: string;
 telephone: string;
 
    
  }

  

@Component({
  selector: 'app-lesagents',
  templateUrl: './lesagents.component.html',
  styleUrls: ['./lesagents.component.css']
})
export class LesagentsComponent implements OnInit {

  displayedColumns: string[] = ['id','nom', 'prenom','mail','service','action'];
  dataSource! : MatTableDataSource<ListePersonne>;
  personne:any;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private httpClient: HttpClient,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.httpClient
      .get('http://localhost:8080/user/get')
      .subscribe((response: any) => {
        console.log('response', response);
        // console.log(response[0].id);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }


 
  applyFilter(personne:any) {
    const filterValue = (personne.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editAgent(personne:any) {

    const dialogRef = this.dialog.open(ModifieragentComponent, {
      width: '100%',
      height :'inherit',
      data: personne
    });
    dialogRef.afterClosed().subscribe(result => {
      this.httpClient.put('http://localhost:8080/user/update',result).subscribe(response => {});
      this.personne = personne;
    });
   
   }

 
   

}
