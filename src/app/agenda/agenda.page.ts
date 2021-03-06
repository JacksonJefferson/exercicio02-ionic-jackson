import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  agenda: {data:any, hora:any, assunto: string}[];
  i: any;

  constructor(private toastController: ToastController) {
    this.agenda = [
      {
        data: '30/09/2019',
        hora: '10:00',
        assunto: 'Trabalho de DDM'
      },
      {
        data: '02/10/2019',
        hora: '1:00',
        assunto: 'Prova de TEW'
      },
    ];
  }
  async remover(registro){
    let i = this.agenda.indexOf(registro);
    this.agenda.splice(i, 1);
    let toast = await this.toastController.create({
      message: 'Excluido com sucesso!!',
      duration: 2000,
      color: 'primary',
    });
    toast.present();
  }   

  
  ngOnInit() {
  }

}
