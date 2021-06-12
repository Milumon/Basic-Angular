import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/entities/colaborador';
import { ColaboradoresService } from 'src/app/services/colaboradores.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  listaColaboradores: Colaborador[];
  constructor(private colaboradoresService: ColaboradoresService) { }

  ngOnInit(): void {
    this.colaboradoresService.colaboradoresSelect().subscribe(
      (res: Colaborador[]) => {
        this.listaColaboradores = res;
        console.log(res);
      }
    )
  }


}
