import { Component } from '@angular/core';
import { Plataforma } from 'src/app/model/Plataforma';

@Component({
  selector: 'app-escenario',
  templateUrl: './escenario.component.html',
  styleUrls: ['./escenario.component.scss']
})
export class EscenarioComponent {
  zoom: number = 50;
  plataformas: Plataforma[] = [
    new Plataforma(10,10),
    new Plataforma(10,20),
    new Plataforma(10,30),
    new Plataforma(10,40),
    new Plataforma(10,50)
  ];
}
