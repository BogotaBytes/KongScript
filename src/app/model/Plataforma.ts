import { Bloque } from "./Bloque";
import { BloqueFactory } from "./BloqueFactory";

export class Plataforma{
  private _x1: number;
  private _y1: number;
  private _x2: number;
  private _y2: number;
  private _m: number;
  private _b: number;
  private _bloques: Bloque[];


  constructor(lowerEnd: number[], higherEnd: number[]){
    this._x1=lowerEnd[0];
    this._y1=lowerEnd[1];
    this._x2=higherEnd[0];
    this._y2=higherEnd[1];
    this._m = (this._y2-this._y1)/(this._x2-this._x1);
		this._b = -this._m*this._x1+this._y1;
    this._bloques=this.generateBloques();

  }

  private generateBloques(): Bloque[]{
    let bloques = [];
    for(let i=this._x1;i<this._x2;i+=25){
      let y= this._m*i+this._b;
      bloques.push(BloqueFactory.getBloque(i,y));
    }
    return bloques;
  }

  get x1(){
    return this._x1;
  }
  get y1(){
    return this._y1;
  }
  get x2(){
    return this._x2;
  }
  get y2(){
    return this._y2;
  }
  get m(){
    return this._m;
  }
  get b(){
    return this._b;
  }
  set x1(x1: number){
    this._x1=x1;
  }
  set y1(y1: number){
    this._y1=y1;
  }
  set x2(x2: number){
    this._x2=x2;
  }
  set y2(y2: number){
    this._y2=y2;
  }
  set m(m: number){
    this._m=m;
  }
  set b(b: number){
    this._b=b;
  }
  get bloques(){
    return this._bloques;
  }

}
