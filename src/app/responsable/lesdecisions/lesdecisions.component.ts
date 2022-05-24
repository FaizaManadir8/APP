import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { UpdatedecisionComponent } from 'src/app/updatedecision/updatedecision.component';
import { ConsulterdecisionComponent } from '../consulterdecision/consulterdecision.component';
import { Decision } from '../ajouterdecision/ajouterdecision.component';
import { DeletdecisionComponent } from 'src/app/deletdecision/deletdecision.component';
export interface ListeDecision {
  id: number;
  nombreDeJours: number;
  dateDemande: Date;
  dateDepart: Date;
  dateRetour: Date;
  etat:string;
  nom: string;
  prenom: string;
}

@Component({
  selector: 'app-lesdecisions',
  templateUrl: './lesdecisions.component.html',
  styleUrls: ['./lesdecisions.component.css']
})
export class LesdecisionsComponent implements OnInit {

  displayedColumns: string[] = ['id','nombreDeJours', 'dateDemande', 'dateDepart','dateRetour', 'etat', 'action'];
  dataSource! : MatTableDataSource<ListeDecision>;
  decision:any;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private httpClient: HttpClient,public dialog: MatDialog) {}

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

  applyFilter(decision:any) {
    const filterValue = (decision.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editDecision(decision:any) {

    const dialogRef = this.dialog.open(UpdatedecisionComponent, {
      width: '450px',
      data: decision
    });
    dialogRef.afterClosed().subscribe(result => {
      this.httpClient.put('http://localhost:8080/decision/update',result).subscribe(response => {});
      this.decision = decision;
    });
   
   }
   deleteDecision(decision:any){
    const dialogRef = this.dialog.open(DeletdecisionComponent, {
      width: '450px',
      data: decision
    });
    dialogRef.afterClosed().subscribe(result => {
      const url = `http://localhost:8080/decision/delete/${result.id}`;
      this.httpClient.delete(url).subscribe(response => {
        console.log("response",response);
        this.ngOnInit();
      });
      this.decision = decision;
    });
   }
   voir(decision: Decision) {
    const dialogRef = this.dialog.open(ConsulterdecisionComponent, {
      width: '100%',
      height:'inherit',
      data: decision,
    });
  }
}
