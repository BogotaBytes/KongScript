import { Component } from '@angular/core';
import { Plataforma } from 'src/app/model/Plataforma';

@Component({
  selector: 'app-escenario',
  templateUrl: './escenario.component.html',
  styleUrls: ['./escenario.component.scss']
})
export class EscenarioComponent {
  zoom: number = 2;
  plataformas: Plataforma[] = [
    new Plataforma([0,523],[784,513]),
    new Plataforma([26,431],[707,451]),
    new Plataforma([78,376],[758,353]),
    new Plataforma([27,280],[706,299]),
    new Plataforma([76,221],[757,202]),
    new Plataforma([27,80],[707,145])
  ];

}
