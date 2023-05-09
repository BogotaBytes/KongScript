import { Bloque } from "./Bloque";

export class BloqueFactory{
  static getBloque(x: number, y:number): Bloque{
    return new Bloque(x,y);
  }
}
