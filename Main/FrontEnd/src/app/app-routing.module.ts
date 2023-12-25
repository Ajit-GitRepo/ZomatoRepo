import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authenticate/login/login.component';
import { SingupComponent } from './Authenticate/singup/singup.component';

import {HomeComponent} from './home/home.component';
import { DetailsComponent } from './details/details.component';
import path from 'path';
import { homedir } from 'os';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'singup', component:SingupComponent},
  {path:':id', component: DetailsComponent}
  // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
