import { Injectable } from '@angular/core';
import { SERIES } from '../../db/series.db';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }


  getAll(){
    return SERIES;
  }

  getById(id: number){
    return SERIES.find(serie => serie.id === id);
  }

  getCanales(){
    const canales = SERIES.map(serie => serie.canal); 
    return [...new Set(canales)] // al utilizar el objeto set, agrupa los canales, lo duplica y lo convierte de nuevo en un array
  }

  getSeriesByCanal(canal: string){
    return SERIES.filter(serie => serie.canal.toLowerCase() === canal.toLowerCase());
  }
}
