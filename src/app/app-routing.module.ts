import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampifyComponent } from './modules/campify/campify.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path:"",pathMatch:"full",redirectTo:"campify"},
  { path: 'account', loadChildren: () => import('./modules/user/user.module').then(x => x.UserModule) },
  { path: 'campify', component: CampifyComponent, loadChildren: () => import('./modules/campify/campify.module').then(x => x.CampifyModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
