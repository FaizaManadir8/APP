import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DeleteCongeComponent } from 'src/app/delete-conge/delete-conge.component';
import { UpdateCongeComponent } from 'src/app/update-conge/update-conge.component';

export interface ListeConges {
  id: number;
  nombreDeJours: number;
  dateDemande: Date;
  dateDebut: Date;
  dateFin: Date;
  etat:string;
}
@Component({
  selector: 'app-mesdemandes',
  templateUrl: './mesdemandes.component.html',
  styleUrls: ['./mesdemandes.component.css'],
})
export class MesdemandesComponent implements OnInit {

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

editConge(conge:any) {

 const dialogRef = this.dialog.open(UpdateCongeComponent, {
   width: '450px',
   data: conge
 });
 dialogRef.afterClosed().subscribe(result => {
   this.httpClient.put('http://localhost:8080/conges/update',result).subscribe(response => {});
   this.conge = conge;
 });

}

deleteConge(conge:any){
 const dialogRef = this.dialog.open(DeleteCongeComponent, {
   width: '450px',
   data: conge
 });
 dialogRef.afterClosed().subscribe(result => {
   const url = `http://localhost:8080/conges/delete/${result.id}`;
   this.httpClient.delete(url).subscribe(response => {
     console.log("response",response);
     this.ngOnInit();
   });
   this.conge = conge;
 });
}

}
