import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-duelos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './duelos.component.html',
  styleUrls: ['./duelos.component.css']
})
export class DuelosComponent {
  @Input() participantes: { 
    nombreEquipo: string, 
    procedencia: string, 
    representante: string, 
    email: string, 
    telefono: string 
  }[] = [];

  duelosArreglo: { 
    nombreEquipo: string, 
    procedencia: string, 
    representante: string, 
    email: string, 
    telefono: string 
  }[] = [];

  randomizarEquipos() {
    this.duelosArreglo = [...this.participantes];
    this.duelosArreglo = this.shuffle(this.duelosArreglo);
  }
  
  private shuffle(array: { 
    nombreEquipo: string, 
    procedencia: string, 
    representante: string, 
    email: string, 
    telefono: string 
  }[]): { 
    nombreEquipo: string, 
    procedencia: string, 
    representante: string, 
    email: string, 
    telefono: string 
  }[] {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
}
