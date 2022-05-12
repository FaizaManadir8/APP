import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  images = ['../../assets/carousel 1.jpg','../../assets/carousel 2.jpg','../../assets/3.jpg','../../assets/carousel 5.jpg'];
}


