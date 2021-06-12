import { Component, OnInit } from '@angular/core';
import { Genio } from 'src/app/entities/genio';
import { GENIOS } from 'src/app/entities/genios';

@Component({
  selector: 'app-genios',
  templateUrl: './genios.component.html',
  styleUrls: ['./genios.component.css']
})
export class GeniosComponent implements OnInit {
  frase = "A luchar por la Justicia"; 
  personas = GENIOS;
  heroeElegido: Genio;
  
  aleatorio = Math.floor(Math.random()*this.personas.length);
  heroeGanador: Genio = this.personas[this.aleatorio];

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(heroeSeleccionado: Genio){
    console.log(heroeSeleccionado);
    this.heroeElegido = heroeSeleccionado;
  }
}
