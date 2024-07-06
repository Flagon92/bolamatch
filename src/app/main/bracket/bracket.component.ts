import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-bracket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bracket.component.html',
  styleUrl: './bracket.component.css'
})

export class BracketComponent {

  partidos: { 
    nombreEquipo: string,
    procedencia: string,
    representante: string,
    email: string,
    telefono: string}[] = [];

  sortearDeshabilitado: boolean = true;
  ganadoresRonda1: { nombreEquipo: string }[] = [];

  i: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    
  }

  barajar(): void {
    this.sharedService.randomizarEquipos();
    this.partidos = this.sharedService.resultadosArreglo;
    if (this.partidos.length >= 4) {
      this.sortearDeshabilitado = false;
    } else {
      // Minimo de equipos antes de permitir barajar
      console.error('Ingrese al menos cuatro equipos.');
    }
  }

  agregarGanador(index: number): void {
    // Validate index within partidos array bounds
    if (index >= 0 && index < this.partidos.length) {
      var ganador = { ...this.partidos[index] }; // Copy object properties
      this.ganadoresRonda1.push(ganador);
      console.log(this.ganadoresRonda1);
    } else {
      console.error(`Invalid index ${index}. Array size is ${this.partidos.length}`);
    }
  }


}
