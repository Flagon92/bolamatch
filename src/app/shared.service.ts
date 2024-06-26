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
    this.resultadosArreglo = [...this.duelosArreglo];//COPIO TODO DE DUELOS ARREGLO A RESULTADOS ARREGLO
    this.names = this.resultadosArreglo.map(equipo => equipo.nombreEquipo);// ALMACENO CADA NOMBRE EN UN NUEVO ARRAY LLAMADO NAMES
    this.winnersTotal = [this.names]//ESTO AUN NO LO USAMOS, PARA PROXIMOS AVANCES
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

      for (let i = 0; i < this.duelosArreglo.length; i += 2) {
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


  borrarPuntajes() {
    for (let duelo of this.duelosIndependientes) {
      duelo.score1 = 0;
      duelo.score2 = 0;
    }
    this.winners = [];
  }

  winners: string[] = [];

  winnersTotal: string[][] = [];//ESTO AUN NO LO USAMOS, ES PARA PROXIMOS AVANCES

  winner() {
    if (this.winners.length === 0) {

      for (let i = 0; i < this.duelosIndependientes.length; i++) {

        if (this.duelosIndependientes[i].score1 > this.duelosIndependientes[i].score2) {
          this.winners.push(this.names[i * 2]);
        } else if (this.duelosIndependientes[i].score1 < this.duelosIndependientes[i].score2) {
          this.winners.push(this.names[i * 2 + 1]);
        }
      }
      this.winnersTotal.push(this.winners);
      this.names = this.winners;
    }
  }

  // ESTE METODO NOS PERMITE REEMPLAZAR EL CONTENIDO DEL ARREGLO DE DUELOS CON EL DE GANADORES, FUNCIONALMENTE AVANZANDONOS A UNA SEGUNDA RONDA.
  siguienteRonda() {
    this.duelosArreglo = this.winners.map(winnerName => {
      return this.participantes.find(participante => participante.nombreEquipo === winnerName)!;
    });
    this.winners = [];
  }


  // FUNCIONES PARA BRACKET COMPONENT
  Jugadores: string[] = [];
  ganadoresRonda: string[] = [];
  numeroRonda: number = 1;
  partidos: number[] = [];
  mensaje: string = '';

  getParticipantes(): Observable<
    {
      nombreEquipo: string;
      procedencia: string;
      representante: string;
      email: string;
      telefono: string;
    }[]
  > {
    return of(this.participantes);
  }

  setJugadores() {
    this.Jugadores = this.participantes.map(p => p.nombreEquipo);
  }

  setPartidos() {
    if (this.Jugadores.length <= 1) {
      throw new Error('No hay suficientes jugadores registrados para un partido');
    } else if (this.Jugadores.length === 2) {
      this.resetJugadores();
      this.partidos.pop();
    } else if (this.Jugadores.length === 4) {
      this.partidos.pop();
      this.numeroRonda++;
    } else {
      this.partidos.pop();
      this.partidos.pop();
      this.numeroRonda++;
    }
  }

  onSubmit() {
    this.mensaje = '';

    // validate
    let modifiedWinners = this.ganadoresRonda.filter((winner) => winner !== '');
    if (modifiedWinners.length != this.partidos.length) {
      this.mensaje = 'Por favor, selecciona un ganador para cada partido';
      throw new Error('Por favor, selecciona un ganador para cada partido');
    }

    this.setPartidos();

    // keep track of winners
    this.Jugadores = [];
    for (let index = 0; index < this.ganadoresRonda.length; index++) {
      this.Jugadores[index] = this.ganadoresRonda[index];
    }

    // declare winner and/or reset for another round
    if (this.ganadoresRonda.length === 1) {
      this.mensaje = 'Ganador: ' + this.ganadoresRonda[0];
      this.ganadoresRonda = [];
    } else {
      this.ganadoresRonda = [];
    }
  }

  addPartidos() {
    for (let index = 1; index < this.Jugadores.length / 2 + 1; index++)
      this.partidos.push(index);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  resetJugadores() {
    this.participantes = [];
    this.Jugadores = [];
    this.ganadoresRonda = [];
    this.numeroRonda = 1;
    this.partidos = [];
    this.mensaje = '';
  }
  

}


