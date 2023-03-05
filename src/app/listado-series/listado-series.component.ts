import { Component } from '@angular/core';
import { Serie } from '../interfaces/serie.interface';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-listado-series',
  templateUrl: './listado-series.component.html',
  styleUrls: ['./listado-series.component.css']
})
export class ListadoSeriesComponent {
  listadoSeries!: Serie[];

  constructor(private seriesService: SeriesService){}

  ngOnInit():void{
    this.listadoSeries = this.seriesService.getAll();
    
  }

}
