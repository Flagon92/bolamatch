import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  @Output() newParticipantEvent = new EventEmitter<{
    nombreEquipo: string;
    procedencia: string;
    representante: string;
    email: string;
    telefono: string;
  }>();

  nuevoParticipante = {
    nombreEquipo: '',
    procedencia: '',
    representante: '',
    email: '',
    telefono: ''
  };

  errorMessage: string = '';

  registrarParticipante() {
    
    const camposVacios = this.validarCamposVacios(this.nuevoParticipante);
    
    if (camposVacios.length === 0) {

      this.newParticipantEvent.emit({ ...this.nuevoParticipante });

      this.nuevoParticipante = {
        nombreEquipo: '',
        procedencia: '',
        representante: '',
        email: '',
        telefono: ''
      };
    } else {

      //alert(`Por favor, ingresa ${camposVacios.join(', ')}`);

    }
  }

  validarCamposVacios(participante: {
    nombreEquipo: string;
    procedencia: string;
    representante: string;
    email: string;
    telefono: string;
  }): string[] {
    const camposVacios: string[] = [];

    if (!participante.nombreEquipo) {
      camposVacios.push('el Nombre del Equipo');
    }
    if (!participante.procedencia) {
      camposVacios.push('la Procedencia');
    }
    if (!participante.representante) {
      camposVacios.push('el Representante');
    }
    if (!participante.email) {
      camposVacios.push('el correo electrónico');
    }
    if (!participante.telefono) {
      camposVacios.push('el numero de teléfono');
    }
    return camposVacios;
  }
}
