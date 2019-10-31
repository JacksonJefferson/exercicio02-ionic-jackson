import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})
export class BoletimPage implements OnInit {
  nova_nota: {disciplina: string, nota: number };
  boletim: { disciplina: string, nota: number }[];
  media: number;
  soma: number;
  i: any;


  constructor(private alertController: AlertController, private toastController: ToastController) {
    this.reset()
    this.boletim = [
      {
        disciplina: 'DDM',
        nota: 5.0
      },
      {
        disciplina: 'TEW',
        nota: 3.5
      },
      {
        disciplina: 'IHC',
        nota: 5.0
      },
      {
        disciplina: 'EMP',
        nota: 10
      },
    ];
    let soma = 0
    for (let i of this.boletim) {
      soma += i.nota
    };
    this.media = soma / this.boletim.length
  }
  async remover(registro) {
    const alert = await this.alertController.create({
      message: 'Deseja excluir nota?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: async () => {
            let i = this.boletim.indexOf(registro);
            this.boletim.splice(i, 1);
            let soma = 0
            for (let i of this.boletim) {
              soma += i.nota
            };
            this.media = soma / this.boletim.length
            let toast = await this.toastController.create({
              message: 'Excluido com sucesso!!',
              duration: 2000,
              color: 'primary',
            });
            toast.present();
          }
        }
      ]
    });
    await alert.present();

  }


  ngOnInit() {
  }
  adicionar(){
    this.boletim.push(this.nova_nota)
    this.reset()
    
  }

  reset(){
    this.nova_nota={
      disciplina:'',
      nota:0
    }

  }

}
