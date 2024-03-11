import "mocha";
import { expect } from "chai";
import { Canal } from "../src/canal";
import { Noticia } from "../src/noticia";
import { Suscriptor } from "../src/suscriptor";

describe('Tests for class Noticia', () => {
    it('Noticia has a title and a body', () => {
        const noticia = new Noticia('title', 'body');
        expect(noticia.getTitulo()).to.be.equal('title');
        expect(noticia.getContenido()).to.be.equal('body');
    });
    });

describe('Tests for class Canal', () => {
    it('Canal has a list of news', () => {
        const canal = new Canal();
        const noticia = new Noticia('title', 'body');
        canal.notificar(noticia);
        expect(canal.getNoticias()).to.be.eql([noticia]);
    });   
});

describe('Tests for class Suscriptor', () => {
   
    it('Suscriptor is notified of the news', () => {
        const canal = new Canal();
        const suscriptor = new Suscriptor('name');
        canal.registrar(suscriptor);
        const noticia = new Noticia('title', 'body');
        canal.notificar(noticia);
        expect(suscriptor.update(canal)).to.be.equal('El suscriptor ${this._nombre} ha sido notificado de la noticia');
    });
});

