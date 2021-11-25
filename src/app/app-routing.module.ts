import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VlistausuariosComponent } from './components/vlistausuarios/vlistausuarios.component';
import { VtramitesComponent } from './components/vtramites/vtramites.component';

const routes: Routes = [

  {path:'', component:VtramitesComponent},
  {path:'listausu', component:VlistausuariosComponent},
  {path:'tramites', component:VtramitesComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
