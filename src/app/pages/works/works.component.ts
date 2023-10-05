import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

    works = '\
      <p><strong>Fecha:</strong> 05/2023 - 09/2023 </p>\
      <p><strong>Empresa:</strong> GRUPO ICC SOLUCIONES PROFESIONALES Y TECNOLOGICAS SL </p> \
      <p><strong>Modalidad:</strong> Remoto</p> \
      <p><strong>Descripción:</strong></p> \
      <p> Me sume a la empresa con el propósito de terminar interesantes proyectos web que habían sido puestos en pausa durante algún tiempo, mis principales tareas son: </p> \
      <p>- Solucionar bugs.</p> \
      <p>- Refactorizar código, volverlo mas legible y/o eficiente.</p> \
      <p>- Ejercer rol de consultor.</p> \
      <p>- adaptar nuevas funcionalidades a los proyectos existentes.</p> \
      <p>Gracias a este puesto pude adquirir experiencia con metodologías similares a Scrum, y aunque cada proyecto cuenta con sus propias tecnologías, las principales utilizadas son Angular(Typescript y Javascript) y Laravel (PHP) </p> \
    ';
}
