import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-logado',
  templateUrl: './menu-logado.component.html',
  styleUrls: ['./menu-logado.component.css']
})
export class MenuLogadoComponent implements OnInit {

  nome = environment.nomeCompleto;

  constructor() { }

  ngOnInit(){
    
  }

}
