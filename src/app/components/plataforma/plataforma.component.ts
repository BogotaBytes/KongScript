
import { Component, Input } from '@angular/core';
import { Plataforma } from 'src/app/model/Plataforma';


@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.scss'],
})

export class PlataformaComponent {
  @Input() isEnable = false;
  @Input() x: number = 0;
  @Input() y: number = 0;
}
