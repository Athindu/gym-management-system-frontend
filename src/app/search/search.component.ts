import { Component, OnInit } from '@angular/core';
import { HttpClientService, DefaultMember } from '../service/http-client.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  members: DefaultMember[];
  membershipNumber:string;
  name:string;
  gender:string;

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.httpClientService.getMembers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response){
    this.members = response;
  }

  searchByID(){
    if(this.membershipNumber==""){
      this.ngOnInit();
    }
    else{
      this.members = this.members.filter(res=>{
        return res.membershipNumber.toLowerCase().match(this.membershipNumber.toLowerCase());
      });
    }
  }

  searchByName(){

    if(this.name==""){
      this.ngOnInit();
    }
    else{
      this.members = this.members.filter(res=>{
        return res.name.toLowerCase().match(this.name.toLowerCase());
      });
    }
  }

  searchByGender(){
    if(this.gender==""){
      this.ngOnInit();
    }
    else{
      this.members = this.members.filter(res=>{
        return res.gender.toLowerCase().match(this.gender.toLowerCase());
      });
    }
  }


}
