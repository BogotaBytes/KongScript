import { Component, Input } from '@angular/core';
import { Plataforma } from 'src/app/model/Plataforma';

@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.scss']
})
export class PlataformaComponent {
  @Input() zoom=0;
  @Input() isEnable: boolean=false;
  @Input() plataforma: Plataforma=new Plataforma([0,0],[0,0]);

}
