import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { LoginComponent } from './components/login/login.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';
import { PaisesComponent } from './components/paises/paises.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './inicio/home/home.component';
import { TablaCategoriasComponent } from './tablas/tabla-categorias/tabla-categorias.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'colaboradores', component: ColaboradoresComponent},
  {path: 'paises', component: PaisesComponent},
  {path: 'paisdetalle/:id', component: PaisDetalleComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'tablacategorias', component: TablaCategoriasComponent},
  {path: 'iniciarsesion', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
