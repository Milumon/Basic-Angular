import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor(private http: HttpClient) { }
  
  colaboradoresSelect(){
    const ruta = "https://servicios.campus.pe/servicioempleados.php";
    return this.http.get(ruta);
  }
}
