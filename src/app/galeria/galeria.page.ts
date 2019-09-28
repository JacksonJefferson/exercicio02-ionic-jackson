import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  galeria;

  constructor() {
    this.galeria=[
      {
        'img': 'https://imirante.com/oestadoma/imagens/2019/04/11/1555011271-1031004298-747x429.jpg',
        'descricao': 'Todos felizes',
      },
      {
        'img': 'https://www.altoastral.com.br/wp-content/uploads/2017/08/avi%C3%A3o-viajar-com-etiqueta.jpg',
        'descricao': 'Ultima viagem',
      },
      {
        'img': 'https://viajandocomaman.com.br/site/wp-content/uploads/2013/05/smiguel-br101-.jpg',
        'descricao': 'Devolta para casa',
      },
    ];
   }

  ngOnInit() {
  }

}
