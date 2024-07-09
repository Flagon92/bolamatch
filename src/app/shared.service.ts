import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  //LISTA DE PARTICIPANTES----------------------
  participantes: {
    nombreEquipo: string;
    procedencia: string;
    representante: string;
    email: string;
    telefono: string;
  }[] = [];
  /////////////////////////////////////////////////////


  //AGREGAR UN PARTICIPANTE EN LA LISTA PARTICIPANTES 
  addParticipante(participante: {
    nombreEquipo: string;
    procedencia: string;
    representante: string;
    email: string;
    telefono: string;
  }) {
    this.participantes.push(participante);
  }
  /////////////////////////////////////////////////////


  //LO QUE ESCRIBIMOS EN LOS INPUTS SE ESCRIBEN AQUI TAMBIEN
  nuevoParticipante = {
    nombreEquipo: '',
    procedencia: '',
    representante: '',
    email: '',
    telefono: ''
  };
  /////////////////////////////////////////////////////

  // errorMessage: string = '';


  //FUNCION DEL BOTON PARA REGISTRAR UN PARTICIPANTE, VALIDAR CAMPOS VACÍOS Y ENVIAR EL OBJETO A LISTA DE PARTICIPANTES
  registrarParticipante() {

    const camposVacios = this.validarCamposVacios(this.nuevoParticipante);

    if (camposVacios.length === 0) {

      this.addParticipante({ ...this.nuevoParticipante });

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


  ////FUNCION PARA VALIDAR LOS CAMPOS VACIOS
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

  /////////////////////////////////////////////////////


  //FUNCION PARA ELIMINAR EQUIPOS----------------------

  borrarEquipo(index: number) {
    this.participantes.splice(index, 1);
  }
  /////////////////////////////////////////////////////



  ///PARA CHOCOLATEAR LOS DUELOS----------------------
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
    this.resultadosArreglo = [...this.duelosArreglo];
    
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

  /////////////////////////////////////////////////////

  resultadosArreglo: { 
    nombreEquipo: string,
    procedencia: string,
    representante: string,
    email: string,
    telefono: string
  }[] = [];



  //ARRAYS POR DEFAULT PARA NO ESTAR ESCRIBIENDO A CADA RATO----------------------------------

  equiposDefaultUno = [
    { nombreEquipo: 'A', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'B', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'C', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'D', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'E', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'F', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'G', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'H', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'I', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'J', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'K', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'L', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'M', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'N', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Ñ', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'O', procedencia: '000', representante: '000', email: '000', telefono: '000' }
  ];

  equiposDefaultDos = [
    { nombreEquipo: 'A', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'B', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'C', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'D', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'E', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'F', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'G', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'H', procedencia: '000', representante: '000', email: '000', telefono: '000' }
  ];

  

}


