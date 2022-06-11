import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { MembersComponent} from './members/members.component';
import { SearchComponent} from './search/search.component';
import { AboutComponent} from './about/about.component';
import { StudentComponent} from './student/student.component';
import { SeniorComponent} from './senior/senior.component';
import { DefaultComponent} from './default/default.component';



const routes: Routes = [

  { path: '', component: DashboardComponent } ,
  { path: 'members', component: MembersComponent },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'student', component: StudentComponent },
  { path: 'senior', component: SeniorComponent },
  { path: 'default', component: DefaultComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
