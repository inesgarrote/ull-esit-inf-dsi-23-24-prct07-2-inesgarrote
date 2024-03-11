import { Observador, Observable } from "./observer.js";
/**
 * Class for Suscriptor
 */
export class Suscriptor implements Observador {
    private _nombre: string;
  
    constructor(nombre: string) {
      this._nombre = nombre;
    }
  
    update(observable: Observable): string {
      return "El suscriptor ${this._nombre} ha sido notificado de la noticia";
  
    }
  }