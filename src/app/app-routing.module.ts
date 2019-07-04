import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [


  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '',loadChildren:'./register/register.module#RegisterModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
  { path : 'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
