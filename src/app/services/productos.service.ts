import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  
  productosSelect(idcategoria){
    const ruta = "https://servicios.campus.pe/servicioproductos.php";

    const formData: FormData = new FormData();
    formData.append("caty",idcategoria)

    return this.http.post(ruta,formData).pipe(
      map((res) => {
        return res
      })
    )
  }
}
