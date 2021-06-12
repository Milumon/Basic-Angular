import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria';
import { Producto } from 'src/app/entities/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() CategoriaX: Categoria;
  listaProductos: Producto[];
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {//Ocurre una sola vez al cargarse el componente
    console.log(this.CategoriaX);
  }
  ngOnChanges(): void {//Varias veces al detectar algún cambio
    console.log(this.CategoriaX);
    this.leerProductos();
  }  

  leerProductos(){
    const idcategoria = this.CategoriaX.idcategoria;
    this.productosService.productosSelect(idcategoria).subscribe(
      (res: Producto[]) => {
        this.listaProductos = res;
        console.log(res);
      }
    )
  }

}
