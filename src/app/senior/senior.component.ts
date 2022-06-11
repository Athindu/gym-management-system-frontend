import { Component, OnInit } from '@angular/core';
import { HttpClientService, DefaultMember } from '../service/http-client.service';


@Component({
  selector: 'app-senior',
  templateUrl: './senior.component.html',
  styleUrls: ['./senior.component.css']
})
export class SeniorComponent implements OnInit {

  members: DefaultMember[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.httpClientService.getSenior().subscribe(
      response => {this.members = response;
      });
  }

  

}
