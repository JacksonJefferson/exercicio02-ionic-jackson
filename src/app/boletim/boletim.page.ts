import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})
export class BoletimPage implements OnInit {
  boletim;

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
        'nota': 3.0
      },
      {
        'disciplina': 'EMP',
        'nota': 0.5
      },
    ];
  }

  ngOnInit() {
  }

}
