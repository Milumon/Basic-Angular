import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/entities/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  listaPaises: Pais[];
  paisesFilter: any = { name: '' };
  order: String = 'alpha3Code';
  reverse: boolean = false;
  paginaActual: number = 1;

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paisesService.paisesSelect().subscribe(
      (res: Pais[]) => {
        this.listaPaises = res;
        console.log(res);
      }
    )
  }

  setOrder(value: string){
    if(this.order === value){    
      this.reverse = !this.reverse;
    }
    this.order = value
  }
}
