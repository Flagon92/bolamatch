import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  @Output() newParticipantEvent = new EventEmitter<{
    nombreEquipo: string;
    procedencia: string;
    representante: string;
    email: string;
    telefono: string;
  }>();

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

  errorMessage: string = '';


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
  }

  sortearDeshabilitado: boolean = false;

  hecho() {
    this.sortearDeshabilitado = true;//PARA FINALIZAR EL SORTEO Y NO SE PUEDA SORTEAR MÁS 
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


  //FUNCION PARA SACAR UN GANADOR ENTRE DOS EQUIPOS

  resultadosArreglo: { // ACÁ TENEMOS UN ARRAY PARA TRABAJAR LOS PUNTAJES, TOTALMENTE INDEPENDIETE QUE ALMACENA EL ARRAY DE DUELOS
    nombreEquipo: string,
    procedencia: string,
    representante: string,
    email: string,
    telefono: string
  }[] = [];

  duelosIndependientes: {//ACÁ TENEMOS UN ARRAY EN EL QUE CADA ELEMENTO ESTAN LOS DOS PUNTAJES
    score1: number;
    score2: number;
  }[] = [];

  instanciaDuelos() {
    if (this.duelosIndependientes.length === 0) {

      for (let i = 0; i < this.names.length; i += 2) {
        this.duelosIndependientes.push(this.nuevoDuelo);//PONEMOS LOS DOS PUNTAJES, O SEA EL OBJETO EN DUELOS INDEPENDIENTES

        this.nuevoDuelo = {
          score1: 0,
          score2: 0
        };
      }
    }
  }

  nuevoDuelo = {
    score1: 0,//EL PUNTAJE QUE SE LE DA AL PRIMER EQUIPO
    score2: 0//EL PUNTAJE QUE SE LE DA AL SEGUNDO EQUIPO
  };

  names: string[] = [];//ARRAY PARA ALMACENAR CADA NOMBRE DE LOS EQUIPOS

  getNombresEquipos() {
    this.resultadosArreglo.push(...this.duelosArreglo);//COPIO TODO DE DUELOS ARREGLO A RESULTADOS ARREGLO
    this.names = this.resultadosArreglo.map(equipo => equipo.nombreEquipo);// ALMACENO CADA NOMBRE EN UN NUEVO ARRAY LLAMADO NAMES
  }

  borrarPuntajes() {
    for (let duelo of this.duelosIndependientes) {
      duelo.score1 = 0;
      duelo.score2 = 0;
    }
    this.winners = [];
  }

  winners: string[] = [];

  winner() {
    if (this.winners.length === 0){

      for (let i = 0; i < this.duelosIndependientes.length; i++) {
  
        if (this.duelosIndependientes[i].score1 > this.duelosIndependientes[i].score2) {
          this.winners.push(this.names[i * 2]);
        } else if (this.duelosIndependientes[i].score1 < this.duelosIndependientes[i].score2) {
          this.winners.push(this.names[i * 2 + 1]);
        }
      }
    }
  }

  // ESTE METODO NOS PERMITE REEMPLAZAR EL CONTENIDO DEL ARREGLO DE DUELOS CON EL DE GANADORES, FUNCIONALMENTE AVANZANDONOS A UNA SEGUNDA RONDA.
  siguienteRonda() {
    // Sacamos a los perdedores del arreglo de participantes
    this.participantes = this.participantes.filter(participante =>
      this.winners.includes(participante.nombreEquipo)
    );
    this.duelosArreglo = [...this.participantes];
  
    // Limpiamos los arreglos
    this.resultadosArreglo = [];
    this.duelosIndependientes = [];
    this.names = [];
    this.winners = [];
  
    // Desbloqueamos el botón de sortear
    this.sortearDeshabilitado = false;
  }
}


