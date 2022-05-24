import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Conge } from 'src/app/agent/congeadministratif/congeadministratif.component';
import { ConsulterdemanComponent } from '../consulterdeman/consulterdeman.component';
import { ConsulterdecisionComponent } from '../consulterdecision/consulterdecision.component';
import { Decision } from '../ajouterdecision/ajouterdecision.component';
export interface ListeConges {
  id: number;
  nombreDeJours: number;
  dateDemande: Date;
  dateDebut: Date;
  dateFin: Date;
  etat:string;
}
@Component({
  selector: 'app-lesdemandes',
  templateUrl: './lesdemandes.component.html',
  styleUrls: ['./lesdemandes.component.css']
})
export class LesdemandesComponent implements OnInit {
  displayedColumns: string[] = ['id','nombreDeJours', 'dateDemande', 'dateDebut','dateFin', 'etat', 'action'];
  dataSource! : MatTableDataSource<ListeConges>;
  conge:any;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  constructor(private httpClient: HttpClient,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.httpClient
      .get('http://localhost:8080/conges/get')
      .subscribe((response: any) => {
        console.log('response', response);
        // console.log(response[0].id);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  applyFilter(conge:any) {
    const filterValue = (conge.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  voir(conge: Conge) {
    const dialogRef = this.dialog.open(ConsulterdemanComponent, {
      width: '100%',
      height:'inherit',
      data: conge,
    });
  }
}


