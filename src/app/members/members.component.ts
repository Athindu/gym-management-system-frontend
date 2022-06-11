import { Component, OnInit } from '@angular/core';
import { HttpClientService, DefaultMember } from '../service/http-client.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: DefaultMember[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.httpClientService.getMembers().subscribe(
      response => {this.members = response;
      });
  }

}