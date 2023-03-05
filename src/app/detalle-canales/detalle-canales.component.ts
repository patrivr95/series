import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../interfaces/serie.interface';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-detalle-canales',
  templateUrl: './detalle-canales.component.html',
  styleUrls: ['./detalle-canales.component.css']
})
export class DetalleCanalesComponent {
  listaDeSeries!: Serie[];

  constructor(private activatedRouter: ActivatedRoute,
    private seriesService: SeriesService){}

  ngOnInit():void{
    this.activatedRouter.params.subscribe(params => {
      this.listaDeSeries = this.seriesService.getSeriesByCanal(params['canal'].split('-').join(' '));
    })
  }

}
