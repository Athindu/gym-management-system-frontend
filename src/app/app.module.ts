import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { SeniorComponent } from './senior/senior.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    SearchComponent,
    AboutComponent,
    DashboardComponent,
    NavBarComponent,
    StudentComponent,
    SeniorComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
