import { Injectable } from '@angular/core';
import { PROYECTS } from '../configs/proyectsConfig';
import { COMPLETEPROYECTS } from '../configs/completeProyects';

@Injectable({
    providedIn: 'root'
  })

export class ProyectsService {

    // Toda esta clase tendria que hacer llamados a una API REST
    // se simulo dichos llamados con la constante PROYECTS

    getProyects(page:number){
        let proyects = PROYECTS.slice((page-1)*3, page*3);
        return proyects;
    }

    getProyectsSize(){
        return PROYECTS.length;
    }

    getProyectById(id: number){
        return COMPLETEPROYECTS.find(proyect => proyect.id == id);
    }
}