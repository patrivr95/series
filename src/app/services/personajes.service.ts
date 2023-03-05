import { Injectable } from '@angular/core';
import { PERSONAJES } from 'src/db/personajes.db';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() { }

  getAll(){
    return PERSONAJES;
  }

  getPersonajesByPelicula(idSerie: number){
    return PERSONAJES.filter(personaje => personaje.serie === idSerie);
  }


  getById(idPersonaje: number){
    return PERSONAJES.find(personaje => personaje.id === idPersonaje);
  }
}
