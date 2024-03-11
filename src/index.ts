/*
La asignatura de DSI acaba de lanzar su feed de noticias y necesita implementar un sistema de gestión de suscriptores al mismo. Implemente las entidades software necesarias, respetando el patrón de diseño Observer, que permitan llevar a cabo dicha gestión. En concreto, cada vez que en el canal se publique algún tipo de noticia, todos los suscriptores deberán ser notificados.

Todo el código fuente deberá ser desarrollado haciendo uso de módulos ESM, en lugar de módulos CJS, que es lo que ha venido utilizando hasta ahora.

*/



import { Noticia } from './noticia';
import { Observable, Observador } from './observer';
import { Suscriptor } from './suscriptor';
import { Canal } from './canal';




// Ejemplo de uso
const canalDSI = new Canal();
const suscriptor1 = new Suscriptor('Juan');
const suscriptor2 = new Suscriptor('Pepe');
const suscriptor3 = new Suscriptor('Ana');

canalDSI.registrar(suscriptor1);
canalDSI.registrar(suscriptor2);
canalDSI.registrar(suscriptor3);

canalDSI.notificar(new Noticia('Examen DSI', 'El examen será el 15 de junio'));
canalDSI.notificar(new Noticia('Entrega práctica', 'La entrega será el 30 de mayo'));


