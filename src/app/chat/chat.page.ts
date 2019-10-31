import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  conversas: { contato: string, assunto: string, img: string }[];
  nova_conversa: { contato: string, assunto: string, img: string };

  constructor() {
    this.conversas = [
      {
        contato: 'Maria',
        assunto: 'Gente a prova foiotima',
        img: 'https://media.cdnandroid.com/5c/c8/09/2c/1c/imagen-bemoji-your-3d-avatar-emoji-0big.jpg',
      },
      {
        contato: 'João',
        assunto: 'Tava muito dificil',
        img: 'https://rlv.zcache.com.br/mousepad_homem_emoji-r233b2542b4424b978504d3262aea55ed_x74vi_8byvr_216.jpg',
      },
    ];
    this.nova_conversa = {
      contato: '',
      assunto: '',
      img: '',
    }
  }

  ngOnInit() {
  }

  adicionar() {
    this.conversas.push(this.nova_conversa)
    
  }

}
