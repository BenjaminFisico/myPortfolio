import { Component, OnInit } from '@angular/core';
import { proyect } from 'src/app/interfaces/proyectStructure';
import { ProyectsService } from 'src/app/services/proyects.servise';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit{
  proyects: proyect[] = [];
  amountProyects:number = 0;
  perPage = 4;

  constructor(private proyectsService: ProyectsService){}

  ngOnInit(){
    this.proyects = this.proyectsService.getProyects(1);
    this.amountProyects = this.proyectsService.getProyectsSize();
  }

  changePage(page:number){
    this.proyects = this.proyectsService.getProyects(page);
    console.log(this.proyects);
  }

}
