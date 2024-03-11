import { Noticia } from './noticia.js';

/**
 * @brief Interface for observable classes
 */
export interface Observable {
    notificar(noticia: Noticia): void;
  }
  
  /**
   * @brief Interface for observer classes
   */
  export interface Observador {
    update(observable: Observable): void;
  }