import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from '../interfaces/serie.interface';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.component.html',
  styleUrls: ['./detalle-serie.component.css']
})
export class DetalleSerieComponent {
  infoSerie!: Serie;
  urlSerie: string = '';

  constructor(private activateRoute: ActivatedRoute, 
    private seriesService: SeriesService,
    private router: Router ){}

  ngOnInit():void {
    this.activateRoute.params.subscribe(param => {
      this.urlSerie = param['serie'];
      const descripcion = param['serie'].split('-');
      const id = descripcion[descripcion.length - 1];
      const response = this.seriesService.getById(parseInt(id))
      if (response){
        this.infoSerie = response;
      }
    })
  }


  goToPersonajes(){
    this.router.navigate(['/serie', this.urlSerie , 'personajes'])
  }

  
}
