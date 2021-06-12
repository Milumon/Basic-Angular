import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from 'src/app/entities/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css']
})
export class PaisDetalleComponent implements OnInit {
  pais: Pais;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisesService: PaisesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const id = params.id
        console.log(id)
        if(id){
          this.leerPais(id)
        }
      }
    )
  }

  leerPais(id){
    this.paisesService.paisDatos(id).subscribe(
      (res: Pais) => {
        this.pais = res
        console.log(this.pais)
      }
    )
  }

}
