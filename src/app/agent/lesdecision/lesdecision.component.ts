import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConsulterdecisionComponent } from 'src/app/responsable/consulterdecision/consulterdecision.component';
import { DecisionComponent } from '../decision/decision.component';

export interface ListeDecision {
  id: number;
  nombreDeJours: number;
  dateDemande: Date;
  dateDepart: Date;
  dateRetour: Date;
}

@Component({
  selector: 'app-lesdecision',
  templateUrl: './lesdecision.component.html',
  styleUrls: ['./lesdecision.component.css']
})
export class LesdecisionComponent implements OnInit {
  displayedColumns: string[] = ['id','nombreDeJours', 'dateDemande', 'dateDepart','dateRetour', 'action'];
  dataSource! : MatTableDataSource<ListeDecision>;
  decision:any;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private httpClient: HttpClient,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.httpClient
    .get('http://localhost:8080/decision/get')
    .subscribe((response: any) => {
      console.log('response', response);
      // console.log(response[0].id);
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
  voirDecision(decision:any) {

    const dialogRef = this.dialog.open(DecisionComponent, {
      width: '100%',
      height:'inherit',
      data: decision
    });

  }

}