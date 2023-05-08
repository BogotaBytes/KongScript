import { Component } from '@angular/core';
import { Plataforma } from 'src/app/model/Plataforma';

@Component({
  selector: 'app-escenario',
  templateUrl: './escenario.component.html',
  styleUrls: ['./escenario.component.scss']
})
export class EscenarioComponent {
  zoom: number = 5;
  plataformas: Plataforma[] = [
    new Plataforma(10,10),
    new Plataforma(20,10),
    new Plataforma(20,10),
    new Plataforma(30,10),
    new Plataforma(40,10),
    new Plataforma(60,10),
    new Plataforma(70,10),
    new Plataforma(80,10),
    new Plataforma(90,10),
    new Plataforma(100,10),
    new Plataforma(120,10),
    new Plataforma(130,10),
    new Plataforma(140,10),
    new Plataforma(150,10)
  ];
}
