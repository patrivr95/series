import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from '../interfaces/personaje.interface';
import { Serie } from '../interfaces/serie.interface';
import { PersonajesService } from '../services/personajes.service';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.css']
})
export class DetallePersonajesComponent {
  personaje!: Personaje;
  serie!: Serie;
 

  constructor(private activateRoute: ActivatedRoute, 
    private personajesService: PersonajesService,
    private seriesService: SeriesService){}

  ngOnInit():void {
    this.activateRoute.params.subscribe(param => {
  
      const nombrePersonaje = param['personaje'].split('-');
      const idSerie = nombrePersonaje[nombrePersonaje.length - 1];
      const response = this.personajesService.getById(parseInt(idSerie));
      if(response){
        this.personaje = response;
        const responseSerie = this.seriesService.getById(this.personaje.serie)
        if(responseSerie){
          this.serie = responseSerie
        }
      }
  
    })
  }
}
