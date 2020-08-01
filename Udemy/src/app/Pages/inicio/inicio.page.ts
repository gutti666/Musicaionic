import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
componentes :Componente[]=[
  {
    icon:'american-football',
    name:'Action sheet',
    redirecto:'/action-shet'
  },
  {
    icon:'american-football',
    name:'Alert',
    redirecto:'/alert'
  },
  {
    icon: "american-football",
    name:'Avatar',
    redirecto:'/avatar'
  },
  {
    icon: "american-football",
    name:'Botones',
    redirecto:'/botones'
  },
  {
    icon: "american-football",
    name:'Card',
    redirecto: '/card'
  },
  {
    icon: "american-football",
    name: 'Check',
    redirecto: '/check'
  },
  {
    icon: "americna-football",
    name: 'Date time ',
    redirecto: '/date-time'
  },
  {
    icon: "american-football",
    name: 'Fab',
    redirecto: '/fab'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
interface Componente {
  icon :string;
  name:string;
  redirecto: string;
}

