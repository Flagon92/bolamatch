import { Component, Injectable, ViewChild } from '@angular/core';
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
      {
        "nombreEquipo": "River Plate",
        "procedencia": "Buenos Aires, Argentina",
        "representante": "Marcelo Gallardo",
        "email": "mgallardo@riverplate.com",
        "telefono": "+54 11 1234 5678"
      },
      {
        "nombreEquipo": "Juniors",
        "procedencia": "Buenos Aires, Argentina",
        "representante": "Juan Román Riquelme",
        "email": "jriquelme@bocajuniors.com",
        "telefono": "+54 11 2345 6789"
      },
      {
        "nombreEquipo": "Barcelona",
        "procedencia": "Barcelona, España",
        "representante": "Xavi Hernández",
        "email": "xavi@fcbarcelona.com",
        "telefono": "+34 93 123 4567"
      },
      {
        "nombreEquipo": "Real Madrid",
        "procedencia": "Madrid, España",
        "representante": "Carlo Ancelotti",
        "email": "ancelotti@realmadrid.com",
        "telefono": "+34 91 234 5678"
      },
      {
        "nombreEquipo": "Manchester United",
        "procedencia": "Manchester, Inglaterra",
        "representante": "Erik ten Hag",
        "email": "tenhag@manutd.com",
        "telefono": "+44 161 876 5432"
      },
      {
        "nombreEquipo": "Liverpool",
        "procedencia": "Liverpool, Inglaterra",
        "representante": "Jürgen Klopp",
        "email": "klopp@liverpoolfc.com",
        "telefono": "+44 151 123 4567"
      },
      {
        "nombreEquipo": "Paris Saint-Germain",
        "procedencia": "París, Francia",
        "representante": "Luis Enrique",
        "email": "enrique@psg.fr",
        "telefono": "+33 1 1234 5678"
      },
      {
        "nombreEquipo": "Bayern Munich",
        "procedencia": "Múnich, Alemania",
        "representante": "Julian Nagelsmann",
        "email": "nagelsmann@fcbayern.com",
        "telefono": "+49 89 1234 5678"
      },
      {
        "nombreEquipo": "Juventus",
        "procedencia": "Turín, Italia",
        "representante": "Massimiliano Allegri",
        "email": "allegri@juventus.com",
        "telefono": "+39 011 1234 5678"
      },
      {
        "nombreEquipo": "Inter Milán",
        "procedencia": "Milán, Italia",
        "representante": "Simone Inzaghi",
        "email": "inzaghi@inter.it",
        "telefono": "+39 02 1234 5678"
      },
      {
        "nombreEquipo": "Atlético Madrid",
        "procedencia": "Madrid, España",
        "representante": "Diego Simeone",
        "email": "simeone@atleticodemadrid.com",
        "telefono": "+34 91 123 4567"
      },
      {
        "nombreEquipo": "AC Milan",
        "procedencia": "Milán, Italia",
        "representante": "Stefano Pioli",
        "email": "pioli@acmilan.com",
        "telefono": "+39 02 3456 7890"
      },
      {
        "nombreEquipo": "Borussia Dortmund",
        "procedencia": "Dortmund, Alemania",
        "representante": "Edin Terzic",
        "email": "terzic@bvb.de",
        "telefono": "+49 231 1234 5678"
      },
      {
        "nombreEquipo": "Chelsea FC",
        "procedencia": "Londres, Inglaterra",
        "representante": "Mauricio Pochettino",
        "email": "pochettino@chelseafc.com",
        "telefono": "+44 20 1234 5678"
      },
      {
        "nombreEquipo": "Manchester City",
        "procedencia": "Manchester, Inglaterra",
        "representante": "Pep Guardiola",
        "email": "guardiola@mancity.com",
        "telefono": "+44 161 234 5678"
      },
      {
        "nombreEquipo": "Tottenham Hotspur",
        "procedencia": "Londres, Inglaterra",
        "representante": "Ange Postecoglou",
        "email": "postecoglou@tottenhamhotspur.com",
        "telefono": "+44 20 8765 4321"
      }    
  ];

  equiposDefaultDos = [{
    "nombreEquipo": "River Plate",
    "procedencia": "Buenos Aires, Argentina",
    "representante": "Marcelo Gallardo",
    "email": "mgallardo@riverplate.com",
    "telefono": "+54 11 1234 5678"
  },
  {
    "nombreEquipo": "Juniors",
    "procedencia": "Buenos Aires, Argentina",
    "representante": "Juan Román Riquelme",
    "email": "jriquelme@bocajuniors.com",
    "telefono": "+54 11 2345 6789"
  },
  {
    "nombreEquipo": "Barcelona",
    "procedencia": "Barcelona, España",
    "representante": "Xavi Hernández",
    "email": "xavi@fcbarcelona.com",
    "telefono": "+34 93 123 4567"
  },
  {
    "nombreEquipo": "Real Madrid",
    "procedencia": "Madrid, España",
    "representante": "Carlo Ancelotti",
    "email": "ancelotti@realmadrid.com",
    "telefono": "+34 91 234 5678"
  },
  {
    "nombreEquipo": "Manchester United",
    "procedencia": "Manchester, Inglaterra",
    "representante": "Erik ten Hag",
    "email": "tenhag@manutd.com",
    "telefono": "+44 161 876 5432"
  },
  {
    "nombreEquipo": "Liverpool",
    "procedencia": "Liverpool, Inglaterra",
    "representante": "Jürgen Klopp",
    "email": "klopp@liverpoolfc.com",
    "telefono": "+44 151 123 4567"
  },
  {
    "nombreEquipo": "Paris Saint-Germain",
    "procedencia": "París, Francia",
    "representante": "Luis Enrique",
    "email": "enrique@psg.fr",
    "telefono": "+33 1 1234 5678"
  },
  {
    "nombreEquipo": "Bayern Munich",
    "procedencia": "Múnich, Alemania",
    "representante": "Julian Nagelsmann",
    "email": "nagelsmann@fcbayern.com",
    "telefono": "+49 89 1234 5678"
  }
  ];

  equiposDefaultTres = [
    { nombreEquipo: 'Equipo 1', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 2', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 3', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 4', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 5', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 6', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 7', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 8', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 9', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 10', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 11', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 12', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 13', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 14', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 15', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 16', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 17', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 18', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 19', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 20', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 21', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 22', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 23', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 24', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 25', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 26', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 27', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 28', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 29', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 30', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 31', procedencia: '000', representante: '000', email: '000', telefono: '000' },
    { nombreEquipo: 'Equipo 32', procedencia: '000', representante: '000', email: '000', telefono: '000' }
];


  // INCORPORANDO EL TYPESCRIPT DE BRACKET AL SHARED SERVICE

  partidos: {
    nombreEquipo: string,
    procedencia: string,
    representante: string,
    email: string,
    telefono: string,
  }[] = [];

  

  sortearDeshabilitado: boolean = true;

  barajar(): void {
    if (this.participantes.length >= 4 && this.participantes.length <= 16) {
      this.randomizarEquipos();
      this.partidos = this.resultadosArreglo;
      this.sortearDeshabilitado = false;
      this.partidos = this.shuffle(this.partidos);
    } else if(this.participantes.length == 32){
      this.cruces = this.clasificados
      this.partidos = this.clasificados;
    } else {
      // Minimo de equipos antes de permitir barajar
      console.error('Ingrese al menos cuatro equipos.');
    }
  }

  

  participantesNecesarios(n: number): boolean {
    return (n & (n - 1)) === 0 && n > 0;
  }

  getDuelIndexes(numGanadores: number): number[] {
    const duelIndexes = [];
    for (let i = 0; i < numGanadores; i += 2) {
      duelIndexes.push(i);
    }
    return duelIndexes;
  }
  
  ganadoresRonda1: any[] = []; // Array para los ganadores de la ronda 1
  ganadoresRonda2: any[] = []; // Array para los ganadores de la ronda 2
  ganadoresRonda3: any[] = []; // Array para los ganadores de la ronda 3
  ganadoresRonda4: any[] = []; // Array para los ganadores de la ronda 4


  duelosDecididosRonda1: boolean[] = []; // Array de booleanos para la ronda 1
  duelosDecididosRonda2: boolean[] = []; // Array de booleanos para la ronda 2
  duelosDecididosRonda3: boolean[] = []; // Array de booleanos para la ronda 3
  duelosDecididosRonda4: boolean[] = []; // Array de booleanos para la ronda 4

  inicializarDuelos(): void {
    const numDuelosRonda1 = Math.ceil(this.partidos.length / 2);
    this.duelosDecididosRonda1 = new Array(numDuelosRonda1).fill(false);

    const numDuelosRonda2 = Math.ceil(numDuelosRonda1 / 2);
    this.duelosDecididosRonda2 = new Array(numDuelosRonda2).fill(false);

    const numDuelosRonda3 = Math.ceil(numDuelosRonda2 / 2);
    this.duelosDecididosRonda3 = new Array(numDuelosRonda3).fill(false);

    const numDuelosRonda4 = Math.ceil(numDuelosRonda3 / 2);
    this.duelosDecididosRonda4 = new Array(numDuelosRonda4).fill(false);

    const numDuelosRonda5 = Math.ceil(numDuelosRonda3 / 2);
    this.duelosDecididosRonda4 = new Array(numDuelosRonda4).fill(false);
  }

  // Función para agregar ganador en la ronda 1
  agregarGanadorRonda1(index: number, duelIndex: number): void {
    if (index >= 0 && index < this.partidos.length) {
      const ganador = { ...this.partidos[index] };
      this.ganadoresRonda1.push(ganador);
      this.duelosDecididosRonda1[duelIndex] = true;
      console.log(this.ganadoresRonda1);
    } else {
      console.error(`Índice inválido ${index}. El tamaño del array es ${this.partidos.length}`);
    }
  }

  // Función para agregar ganador en la ronda 2
  agregarGanadorRonda2(index: number, duelIndex: number): void {
    if (index >= 0 && index < this.ganadoresRonda1.length) {
      const ganador = { ...this.ganadoresRonda1[index] };
      this.ganadoresRonda2.push(ganador);
      this.duelosDecididosRonda2[duelIndex] = true;
      console.log(this.ganadoresRonda2);
    } else {
      console.error(`Índice inválido ${index}. El tamaño del array es ${this.ganadoresRonda1.length}`);
    }
  }

    // Función para agregar ganador en la ronda 3
    agregarGanadorRonda3(index: number, duelIndex: number): void {
      if (index >= 0 && index < this.ganadoresRonda2.length) {
        const ganador = this.ganadoresRonda2[index];
        this.ganadoresRonda3.push(ganador);
        this.duelosDecididosRonda3[duelIndex] = true; // Desactivar el duelo correspondiente
  
        // Otras operaciones si es necesario
  
        console.log('Ganadores Ronda 3:', this.ganadoresRonda3);
        console.log('Duelos decididos Ronda 3:', this.duelosDecididosRonda3);
  
        // Verificar si se debe mostrar la ronda 4
        if (this.ganadoresRonda3.length > 1) {
          // Mostrar la ronda 4 si hay más de un ganador en la ronda 3
        } else {
          // No hacer nada si solo hay un ganador (el torneo ha terminado)
        }
      } else {
        console.error(`Índice inválido ${index}. El tamaño del array es ${this.ganadoresRonda2.length}`);
      }
    }

  // Función para agregar ganador en la ronda 4
  agregarGanadorRonda4(index: number, duelIndex: number): void {
    if (index >= 0 && index < this.ganadoresRonda3.length) {
      const ganador = this.ganadoresRonda3[index];
      this.ganadoresRonda4.push(ganador);
      this.duelosDecididosRonda4[duelIndex] = true; // Desactivar el duelo correspondiente

      // Otras operaciones si es necesario

      console.log('Ganadores Ronda 4:', this.ganadoresRonda4);
      console.log('Duelos decididos Ronda 4:', this.duelosDecididosRonda4);

      // Verificar si se debe mostrar la ronda 5
      if (this.ganadoresRonda4.length > 1) {
        // Mostrar la ronda 4 si hay más de un ganador en la ronda 3
      } else {
        // No hacer nada si solo hay un ganador (el torneo ha terminado)
      }
    } else {
      console.error(`Índice inválido ${index}. El tamaño del array es ${this.ganadoresRonda3.length}`);
    }
  }

  

  //COSITAS PARA LA FASE DE GRUPOS========================================================================
  
  sortearGruposConfirmado: boolean = false;
  sortearGruposDeshabilitado = true;

  equiposGrupos: {
    nombreEquipo: string,
    procedencia: string,
    representante: string,
    email: string,
    telefono: string
  }[][] = [];

  clasificados: {
    nombreEquipo: string,
    procedencia: string,
    representante: string,
    email: string,
    telefono: string,
    grupoIndex: number,
    posicion: number
  }[] = [];

  barajarGrupos(): void {
    this.randomizarEquipos();
    // Verificar que tenemos suficientes equipos
    if (this.resultadosArreglo.length === 32) {
        this.equiposGrupos = [];
        for (let i = 0; i < this.resultadosArreglo.length; i += 4) {
            this.equiposGrupos.push(this.resultadosArreglo.slice(i, i + 4));
        }
    } else {
        // Minimo de equipos antes de permitir barajar
        console.error('Ingrese al menos 32 equipos.');
    }
}

cruces: any[] = [];

maxSeleccionadosPorGrupo = 2;



seleccionarEquipo(equipo: any, grupoIndex: number) {
  const equipoSeleccionado = { ...equipo, grupoIndex };

  const index = this.clasificados.findIndex(e => e.nombreEquipo === equipo.nombreEquipo && e.grupoIndex === grupoIndex);
  if (index !== -1) {
    this.clasificados.splice(index, 1);
  } else {
    const equiposDelGrupo = this.clasificados.filter(e => e.grupoIndex === grupoIndex);
    if (equiposDelGrupo.length < this.maxSeleccionadosPorGrupo) {
      const posicion = equiposDelGrupo.length + 1;
      this.clasificados.push({ ...equipoSeleccionado, posicion });
    } else {
      alert('Solo puedes seleccionar hasta dos equipos por grupo.');
    }
  }
}

estaSeleccionado(equipo: any, grupoIndex: number) {
  return this.clasificados.some(e => e.nombreEquipo === equipo.nombreEquipo && e.grupoIndex === grupoIndex);
}

yaSeleccionados(grupoIndex: number) {
  const equiposDelGrupo = this.clasificados.filter(e => e.grupoIndex === grupoIndex);
  return equiposDelGrupo.length === this.maxSeleccionadosPorGrupo;
}

obtenerPosicion(equipo: any, grupoIndex: number) {
  const equipoSeleccionado = this.clasificados.find(e => e.nombreEquipo === equipo.nombreEquipo && e.grupoIndex === grupoIndex);
  return equipoSeleccionado ? equipoSeleccionado.posicion : '';
}

ordenarCruces() {
  const clasificadosPorGrupo: any[][] = Array.from({ length: 8 }, () => []);
  this.clasificados.forEach(equipo => {
    clasificadosPorGrupo[equipo.grupoIndex].push(equipo);
  });

  this.cruces = [];
  for (let i = 0; i < 8; i += 2) {
    const grupoA = clasificadosPorGrupo[i];
    const grupoB = clasificadosPorGrupo[i + 1];
    this.cruces.push([grupoA.find(e => e.posicion === 1), grupoB.find(e => e.posicion === 2)]);
    this.cruces.push([grupoB.find(e => e.posicion === 1), grupoA.find(e => e.posicion === 2)]);
  }

  this.clasificados = this.cruces.flat().filter(equipo => equipo);
  this.partidos = this.clasificados;
}

isSeleccionado(equipo: string): boolean {
  return this.clasificados.some(p => p.nombreEquipo === equipo);
}

isDivDisabled = false;//ESTADO DEL BOTON "LISTO" QUE ESTÁ EN EL COMPONENTE GRUPOS PARA CONFIRMAR LOS CLASIFICADOS

}


