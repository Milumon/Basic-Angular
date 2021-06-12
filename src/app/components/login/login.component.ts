import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl(),
    clave: new FormControl()
  })

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  verificarLogin(values){
    this.loginService.signin(values.usuario, values.clave).subscribe(
    (res) => {
      console.log(res)
    })

  }

}
