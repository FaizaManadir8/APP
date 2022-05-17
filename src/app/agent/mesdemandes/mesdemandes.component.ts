import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export interface ListeConges {
  id: number;
  nombreJours: number;
  dateDemande: Date;
  dateDebut: Date;
  dateFin: Date;
}
@Component({
  selector: 'app-mesdemandes',
  templateUrl: './mesdemandes.component.html',
  styleUrls: ['./mesdemandes.component.css']
})
export class MesdemandesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'titre', 'dateDebut', 'etat', 'action'];
  // dataSource: MatTableDataSource<ListeConges>;
  // conge;

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/conges/get')
    .subscribe((response:any) => {
      console.log("response", response);
      // this.dataSource = new MatTableDataSource(response);
    });

  }

}
