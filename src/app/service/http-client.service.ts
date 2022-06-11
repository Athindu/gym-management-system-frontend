import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


export class DefaultMember{
  constructor(
    public membershipNumber:string,
    public name:string,
    public startMembershipDate:Date,
    public gender:string,
    public contactNum:string,
    public schoolName:string,
    public grade:string,
    public guardianName:string,
    public age:string,
    public idNum:string,
    public occupation:string,
  ){
  }
}

export class Date{
  constructor(
    public day:string,
    public month:string,
    public year:string
    ){
    }
}

export class Count{
  constructor(
    public fullCount:string,
    public studentCount:string,
    public seniorCount:string,
    public defaultCount:string
  ){
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

    private userUrl= 'http://localhost:8080/api/members';

  getMembers(){
    return this.httpClient.get<DefaultMember[]>(this.userUrl);
  }


  addMem(member: DefaultMember)  {
    return this.httpClient.post<DefaultMember>(this.userUrl,member);
  }

  deltMem(membershipNumber: number): Observable<any>{
    return this.httpClient.delete(`${this.userUrl}/${membershipNumber}`);
  }

  private newUrl = 'http://localhost:8080/api/members/all'

  getCount(){
    return this.httpClient.get<Count>(this.newUrl);
  }

  getStudent(){
    return this.httpClient.get<DefaultMember[]>('http://localhost:8080/api/members/student');
  }

  getSenior(){
    return this.httpClient.get<DefaultMember[]>('http://localhost:8080/api/members/senior');
  }

  getDefault(){
    return this.httpClient.get<DefaultMember[]>('http://localhost:8080/api/members/default');
  }

}

