
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bloque',
  templateUrl: './bloque.component.html',
  styleUrls: ['./bloque.component.scss'],
})

export class BloqueComponent {
  @Input() isEnable = false;
  @Input() x: number = 0;
  @Input() y: number = 0;
}
