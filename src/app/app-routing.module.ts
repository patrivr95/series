import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleCanalesComponent } from './detalle-canales/detalle-canales.component';
import { DetalleListadoComponent } from './detalle-listado/detalle-listado.component';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { DetalleSerieComponent } from './detalle-serie/detalle-serie.component';
import { ListadoCanalesComponent } from './listado-canales/listado-canales.component';
import { ListadoPersonajesComponent } from './listado-personajes/listado-personajes.component';
import { ListadoSeriesComponent } from './listado-series/listado-series.component';
import { PersonajesSerieComponent } from './personajes-serie/personajes-serie.component';
import { TemporadasSerieComponent } from './temporadas-serie/temporadas-serie.component';

const routes: Routes = [
  {path: "", redirectTo: 'series', pathMatch:'full'},
  {path: 'series', component: ListadoSeriesComponent},
  {path: 'serie/:serie', component: DetalleSerieComponent, children: [
    {path: 'personajes', component: PersonajesSerieComponent},
    {path: 'temporada', component: TemporadasSerieComponent}
  ]},
  {path: 'personajes', component: ListadoPersonajesComponent},
  {path: 'personajes/:personaje', component: DetallePersonajesComponent},
  {path: 'canales', component: ListadoCanalesComponent},
  {path: 'canales/:canal', component: DetalleCanalesComponent},
  {path: '**', redirectTo: 'series'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
