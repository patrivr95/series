import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.css']
})
export class ListadoPersonajesComponent {

  listadoPersonajes!: Personaje[];

  constructor(private personajesService: PersonajesService){}

  ngOnInit():void {
    this.listadoPersonajes = this.personajesService.getAll()
  }

}
