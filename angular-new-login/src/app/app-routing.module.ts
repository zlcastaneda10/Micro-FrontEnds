import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { login} from './Component/login.component';
import { SpaComponent} from './spa/spa.component';


const routes: Routes = [
  {path: 'login', component: login},
  {path: 'spa', component: SpaComponent},
  {path: '', component: login}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
