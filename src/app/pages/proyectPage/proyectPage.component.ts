import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectsService } from 'src/app/services/proyects.servise';

@Component({
  selector: 'app-proyectPage',
  templateUrl: './proyectPage.component.html',
  styleUrls: ['./proyectPage.component.css']
})
export class ProyectPageComponent implements OnInit{
  proyect : any;

  constructor(private proyectsService: ProyectsService,
              private route: ActivatedRoute){}

  ngOnInit(){
    const routeId = this.route.snapshot.paramMap.get('id');
    const numberId: number = parseInt(routeId ? routeId : '', 10);
    this.proyect = this.proyectsService.getProyectById(numberId);
    if(this.proyect.htmlContent == ''){
      this.proyect.htmlContent = '\
        <p> La información referente a este proyecto todavia esta siendo armada </p> \
        <img src="https://images2.imgbox.com/07/51/gBG7lrVW_o.jpg" width="720"> \
      '
    }
  }
}
