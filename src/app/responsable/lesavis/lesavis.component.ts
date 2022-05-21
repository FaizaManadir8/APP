import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ConsulteravisComponent } from 'src/app/agent/consulteravis/consulteravis.component';

export interface ListeAvis {
  id: number;
  nom: string;
  dateDemande: Date;
  dateDebut: Date ;
  dateReprise: Date;
  prenom:string;
} 
@Component({
  selector: 'app-lesavis',
  templateUrl: './lesavis.component.html',
  styleUrls: ['./lesavis.component.css']
})

export class LesavisComponent implements OnInit {
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

  cobsulterAvis(avis:any) {

    const dialogRef = this.dialog.open(ConsulteravisComponent, {
      width: '700px',
      height:'inherit',
      data: avis
    });
    dialogRef.afterClosed().subscribe(result => {
      this.httpClient.put('http://localhost:8080/avis/get',result).subscribe(response => {});
      this.avis = avis;
    });
  }

} 
