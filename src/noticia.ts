/**
 * Class for Noticia
 */
export class Noticia {
    private _titulo: string;
    private _contenido: string;
  
    constructor(titulo: string, contenido: string) {
      this._titulo = titulo;
      this._contenido = contenido;
    }
  
    getTitulo() {
      return this._titulo;
    }
  
    getContenido() {
      return this._contenido;
    }
  }