import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
    {path: 'login', component: LoginComponent},
    { path: 'logout', component: LogoutComponent  },
    {path: '',redirectTo: 'login', pathMatch: 'full'}, 
    {path:'estock',loadChildren:()=>import("./loginmodule/loginmodule.module").then(m=>m.LoginmoduleModule)}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
