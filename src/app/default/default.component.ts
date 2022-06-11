import { Component, OnInit } from '@angular/core';
import { HttpClientService, DefaultMember } from '../service/http-client.service';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  members: DefaultMember[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.httpClientService.getDefault().subscribe(
      response => {this.members = response;
      });
  }

}
