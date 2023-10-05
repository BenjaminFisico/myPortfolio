import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact = '\
  <h3> Espero que la visita haya sido de tu agrado</h3> \
  <hr> \
  <p> Si mi perfil llamo tu atención y quieres que colaboremos juntos, no dudes en contactarme 🙂</p>\
  <p>También si sos un compañero programador y quieres que conversemos sobre cualquier tema estoy más que encantado</p> \
  <hr> \
  <p> 📍<strong>Ubicación:</strong> Bragado , Buenos Aires , Argentina</p> \
  <p><strong>Whatsapp: </strong> <a href="https://wa.me/+5492342463886" target="_blank"> Envíame un mensaje haciendo click aquí!<a/> | o al número +54 9 2342 463886</p> \
  <p><strong>Correo electrónico: </strong> Benjaminfisico@gmail.com</p> \
  <p><strong>Linkedin: </strong><a href="https://www.linkedin.com/in/benjamin-fisico/" target="_blank"> Benjamin’s profile </a> \
  <p><strong>GitHub: </strong><a href="https://github.com/BenjaminFisico" target="_blank"> Benjamin’s gitHub </a> \
  '

}
