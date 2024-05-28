import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  //almacena un nuevo participante
  nuevoParticipante = {
    nombreEquipo: '',
    procedencia: '',
    representante: '',
    email: '',
    telefono: ''
  };

  //Lista de participantes
  participantes: { nombreEquipo: string, 
                  procedencia: string,
                  representante: string,
                  email: string,
                  telefono: string }[] = [];

  //Funcion para registrar un nuevo participante
  registrarParticipante() {
    // Validar que todos los campos estén llenos antes de registrar
    const camposVacios = this.validarCamposVacios(this.nuevoParticipante)
    
    if (camposVacios.length === 0) {

      // Agregar el nuevo participante a la lista
      this.participantes.push({ ...this.nuevoParticipante });

      // Limpiar el objeto nuevoParticipante para el siguiente registro
      this.nuevoParticipante = {
        nombreEquipo: '',
        procedencia: '',
        representante: '',
        email: '',
        telefono: ''
      };
    } else {
      alert(`Por favor, ingresa ${camposVacios.join(', ')}`);
    }
  }

  validarCamposVacios(participante: { nombreEquipo: string; procedencia: string; representante: string; email: string; telefono: string }): string[] {
    const camposVacios: string[] = [];

    //Comprovacion de campos vacios individualemnte
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

  randomizarEquipos() {

    //Verificar si la cantidad de participantes es par
    // if (this.participantes.length % 2 !== 0) {
    //   alert ('Ingresa una cantidad par de equipos')
    //   return;
    // }

    // Chocolatear los equipos
    this.participantes = this.shuffle(this.participantes);
  }
  
  private shuffle(array: { nombreEquipo: string, procedencia: string, representante: string, email: string, telefono: string }[]): { nombreEquipo: string, procedencia: string, representante: string, email: string, telefono: string }[] {
    let currentIndex = array.length, randomIndex;

    // Mientras queden elementos sin barajar
    while (currentIndex != 0) {

      // Elegir un objeto al azar
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Y lo cambias de sitio con otro.
      [array[currentIndex], array[randomIndex]] = 
      [array[randomIndex], array[currentIndex]];
    }
    return array;
}
}
