import { Component, OnInit } from '@angular/core';
import { HttpClientService, DefaultMember } from '../service/http-client.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  
  members: DefaultMember[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.httpClientService.getStudent().subscribe(
      response => {this.members = response;
      });
  }

}
