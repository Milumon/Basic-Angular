import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/entities/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-tabla-categorias',
  templateUrl: './tabla-categorias.component.html',
  styleUrls: ['./tabla-categorias.component.css']
})
export class TablaCategoriasComponent implements OnInit {
  listaCategorias: Categoria[];
  categoriasAgregarForm = new FormGroup({
    nombre: new FormControl(),
    descripcion: new FormControl()
  });
  nuevaCategoria: any = {}

  faEdit = faEdit;
  faTimes = faTimes; 

  categoriasActualizarForm = new FormGroup({
    idcategoria: new FormControl(),
    nombre: new FormControl(),
    descripcion: new FormControl()
  });
  categoriaActualizar: Categoria;

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.categoriasSelect().subscribe(
      (res: Categoria[]) => {
        this.listaCategorias = res;
        console.log(res);
      }
    )
  }

  agregarCategoria(values){
    this.categoriasService.categoriasInsert(values.nombre,values.descripcion).subscribe(
      (res) => {
        this.nuevaCategoria = {
          idcategoria: res,
          nombre: values.nombre,
          descripcion: values.descripcion 
        }
        this.listaCategorias.push(this.nuevaCategoria)
       // var collapseAgregar = document.getElementById("collapseAgregar");
       // collapseAgregar.classList.remove("show");
       this.categoriasAgregarForm.reset();
      }
    )
  }
  editarCategoria(filaCategoria: Categoria){
    console.log(filaCategoria);
    this.categoriaActualizar = filaCategoria;
  }
  actualizarCategoria(values){
    this.categoriasService.categoriasUpdate(values.idcategoria, values.nombre, values.descripcion).subscribe();
    document.getElementById("botonCerrar").click();
  }
  eliminarCategoria(filaCategoria: Categoria){
    var respuesta = confirm("¿Está seguro que desea eliminar la categoría? "+ filaCategoria.nombre + " ?");
    if(respuesta == true){
      this.categoriasService.categoriasDelete(filaCategoria.idcategoria).subscribe();
      this.listaCategorias = this.listaCategorias.filter(
        item => item.idcategoria !==filaCategoria.idcategoria
      );
      alert("Se ha eliminado la categoría: " + filaCategoria.nombre);
    }
  }
}
