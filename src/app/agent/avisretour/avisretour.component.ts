import { Component, OnInit ,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DeleteCongeComponent } from 'src/app/delete-conge/delete-conge.component';
import { UpdateCongeComponent } from 'src/app/update-conge/update-conge.component';
import { HttpClient } from '@angular/common/http';
import { UpdateavisComponent } from 'src/app/updateavis/updateavis.component';

export interface ListeAvis {
  id: number;
  nom: string;
  dateDemande: Date;
  dateDebut: Date;
  dateReprise: Date;
  prenom:string;
}

@Component ({
  selector: 'app-avisretour',
  templateUrl: './avisretour.component.html',
  styleUrls: ['./avisretour.component.css']
})
export class AvisretourComponent implements OnInit {

  displayedColumns: string[] = ['id','nom','prenom', 'dateDemande', 'dateDebut','dateReprise','action'];
  dataSource! : MatTableDataSource<ListeAvis>;
  avis:any;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private httpClient: HttpClient,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.httpClient
      .get('http://localhost:8080/avis/get')
      .subscribe((response: any) => {
        console.log('response', response);
        // console.log(response[0].id);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(avis:any) {
    const filterValue = (avis.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editAvis(avis:any) {

    const dialogRef = this.dialog.open(UpdateavisComponent, {
      width: '450px',
      data: avis
    });
    dialogRef.afterClosed().subscribe(result => {
      this.httpClient.put('http://localhost:8080/avis/update',result).subscribe(response => {});
      this.avis = avis;
    });
   
   }

   deleteAvis(avis:any){
    const dialogRef = this.dialog.open(DeleteCongeComponent, {
      width: '450px',
      data: avis
    });
    dialogRef.afterClosed().subscribe(result => {
      const url = `http://localhost:8080/avis/delete/${result.id}`;
      this.httpClient.delete(url).subscribe(response => {
        console.log("response",response);
        this.ngOnInit();
      });
      this.avis = avis;
    });
   }


}
