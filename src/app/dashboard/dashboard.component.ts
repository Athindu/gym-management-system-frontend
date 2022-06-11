import { Component, OnInit } from '@angular/core';
import { HttpClientService, Count } from '../service/http-client.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  counts: Count;

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.httpClientService.getCount().subscribe(
      response => {this.counts = response;
      });
  }

  


}
