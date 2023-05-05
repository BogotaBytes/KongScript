import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.scss'],
  animations:[
    trigger('animacionPlataforma',[
      state('disable',style({
        position: 'absolute',
        top: '150px',
        left: '30px'
      })),
      state('enable',style({
        position: 'absolute',
        top: '150px',
        left: '300px'
      })),
      transition('disable => enable',
        animate('0.5s')
        )
    ])



  ]
})
export class PlataformaComponent {
  isEnable = 'disable';

}
