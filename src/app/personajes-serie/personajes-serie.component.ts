import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '../interfaces/personaje.interface';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-personajes-serie',
  templateUrl: './personajes-serie.component.html',
  styleUrls: ['./personajes-serie.component.css']
})
export class PersonajesSerieComponent {
  personajes!: Personaje[];

  constructor(private activateRoute: ActivatedRoute,
    private personajesService: PersonajesService){};

    ngOnInit():void {
      this.activateRoute.parent?.params.subscribe(param => {
        const descripcion = param['serie'].split(' ').join('-');
        const id = descripcion[descripcion.length - 1];
        this.personajes = this.personajesService.getPersonajesByPelicula(parseInt(id))
      })

    }

  


}
