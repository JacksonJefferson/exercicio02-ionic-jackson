import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario;

  constructor() {
    this.usuario = {
      'nome':'Jubileu'   
    };
  }

}
