import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-conteiner',
  templateUrl: './content-conteiner.component.html',
  styleUrls: ['./content-conteiner.component.css']
})
export class ContentConteinerComponent {
  
  @Input() tittle = "";
  @Input() content = "";
  @Input() link = "";
}
