import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})
export class BoletimPage implements OnInit {
  boletim;
  media;

  constructor() {
    this.boletim = [
      {
        'disciplina': 'DDM',
        'nota': 5.0
      },
      {
        'disciplina': 'TEW',
        'nota': 3.5
      },
      {
        'disciplina': 'IHC',
        'nota': 5.0
      },
      {
        'disciplina': 'EMP',
        'nota': 10
      },
    ];
    let soma = 0
    for (let i of this.boletim){
        soma += i.nota
    };
    this.media = soma/this.boletim.length
  }


  ngOnInit() {
  }

}
