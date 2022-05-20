import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay, filter } from 'rxjs/operators';
import { Compte } from 'src/app/login/login.component';
import { LoginService } from 'src/app/login/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  compte!: Compte;
  isAgent: boolean = false;
  isChefService: boolean = false;
  isResponsableRH: boolean = false;

  url = 'assets/avatar6.png';
  onselectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private loginService: LoginService,
    private router: Router,
    private httpClient : HttpClient,
  
  ) {
    this.getUserLoggedIn();
  }
  getUserLoggedIn() {
    if (localStorage.getItem('user')) {
      this.compte = JSON.parse(localStorage.getItem('user')!);
      if (this.compte) {
        console.log('compte', this.compte);
        if (this.compte.privilege === 'Agent') {
          this.isAgent = true;
          this.isChefService = false;
          this.isResponsableRH = false;
        } else if (this.compte.privilege === 'ChefDeService') {
          this.isAgent = false;
          this.isChefService = true;
          this.isResponsableRH = false;
        } else if (this.compte.privilege === 'ResponsableRH') {
          this.isAgent = false;
          this.isChefService = false;
          this.isResponsableRH = true;
        }
      }
    }
  }
  getUser(){
    this.httpClient.get(`http://localhost:8080/comptes/get/${this.compte.id}`).subscribe((response)=>{
    this.compte=response;
    console.log("response",response)
    });
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  ngOnInit(): void {  this.getUser()}
  logout() {
    this.loginService.clearLocalStorage();
    this.router.navigate(['/login']);
    this.isAgent = false;
    this.isChefService = false;
    this.isResponsableRH = false;
  }
}
