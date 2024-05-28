import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {
  @Input() participantes: { 
    nombreEquipo: string, 
    procedencia: string, 
    representante: string, 
    email: string, 
    telefono: string 
  }[] = [];
}