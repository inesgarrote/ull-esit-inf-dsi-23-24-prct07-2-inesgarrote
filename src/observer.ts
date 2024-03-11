import { Noticia } from './noticia.js';

/**
 * Interface for observable classes
 */
export interface Observable {
    notificar(noticia: Noticia): void;
  }
  
  /**
   * Interface for observer classes
   */
  export interface Observador {
    update(observable: Observable): void;
  }