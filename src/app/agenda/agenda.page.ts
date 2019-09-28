import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  agenda;

  constructor() {
    this.agenda = [
      {
        'data': '30/09/2019',
        'hora': '10:00',
        'assunto': 'Trabalho de DDM'
      },
      {
        'data': '02/10/2019',
        'hora': '1:00',
        'assunto': 'Prova de TEW'
      },
    ];
  }
  
  ngOnInit() {
  }

}
