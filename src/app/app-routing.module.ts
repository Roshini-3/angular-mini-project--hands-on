import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from 'src/auth-guard/authguard.service';
import { CloginComponent } from './clogin/clogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpComponent } from './emp/emp.component';
import { LoginComponent } from './login/login.component';
//import { CardComponent } from './dashboard/card/card.component';


const routes: Routes = [
  {
    path: 'clogin',
    component: CloginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    // loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardService],
  },
  {
    path: 'Emp',
    component: EmpComponent,
    canActivate: [AuthguardService],
  },
  {
    path: '',
    redirectTo: '/clogin',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/clogin' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
