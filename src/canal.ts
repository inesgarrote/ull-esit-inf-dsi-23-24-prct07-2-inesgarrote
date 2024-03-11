import { Noticia } from './noticia.js';
import { Observable, Observador } from './observer.js';
/**
 * @brief Class for Canal
 */
export class Canal implements Observable {
    private _noticias: Noticia[] = [];
    private _observadores: Observador[] = [];
  
    notificar(noticia: Noticia): void {
      this._noticias.push(noticia);
      this._observadores.forEach((observador) => observador.update(this));
    }
  
    registrar(observador: Observador): void {
      this._observadores.push(observador);
    }
  
    eliminar(observador: Observador): void {
      this._observadores = this._observadores.filter((o) => o !== observador);
    }
  
    getNoticias() {
      return this._noticias;
    }
  }