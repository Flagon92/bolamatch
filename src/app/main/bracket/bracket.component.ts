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

  constructor(public sharedService: SharedService) { }

  currentAdversary1: any;
  currentAdversary2: any;
  currentDuelIndex: number = 0;

  sortearDeshabilitado: boolean = true;

  ngOnInit() {
    this.sharedService.inicializarDuelos();

  }

  barajar(): void {
    this.sharedService.barajar();

    this.sortearDeshabilitado = false;
  }

  get partidos() {
    return this.sharedService.partidos;
  }

  get ganadoresRonda1() {
    return this.sharedService.ganadoresRonda1;
  }

  get ganadoresRonda2() {
    return this.sharedService.ganadoresRonda2;
  }

  get ganadoresRonda3() {
    return this.sharedService.ganadoresRonda3;
  }

  get ganadoresRonda4() {
    return this.sharedService.ganadoresRonda4;
  }

  get duelosDecididosRonda1() {
    return this.sharedService.duelosDecididosRonda1;
  }

  get duelosDecididosRonda2() {
    return this.sharedService.duelosDecididosRonda2;
  }

  get duelosDecididosRonda3() {
    return this.sharedService.duelosDecididosRonda3;
  }

  get duelosDecididosRonda4() {
    return this.sharedService.duelosDecididosRonda4;
  }

  participantesNecesarios(n: number): boolean {
    return this.sharedService.participantesNecesarios(n);
  }

  getDuelIndexes(numGanadores: number): number[] {
    return this.sharedService.getDuelIndexes(numGanadores);
  }

  agregarGanadorRonda1(index: number, duelIndex: number): void {
    this.sharedService.agregarGanadorRonda1(index, duelIndex);
  }

  agregarGanadorRonda2(index: number, duelIndex: number): void {
    this.sharedService.agregarGanadorRonda2(index, duelIndex);
  }

  agregarGanadorRonda3(index: number, duelIndex: number): void {
    this.sharedService.agregarGanadorRonda3(index, duelIndex);
  }

  agregarGanadorRonda4(index: number, duelIndex: number): void {
    this.sharedService.agregarGanadorRonda4(index, duelIndex);
  }

  openModal(adversary1: any, adversary2: any, duelIndex: number): void {
    this.currentAdversary1 = adversary1;
    this.currentAdversary2 = adversary2;
    this.currentDuelIndex = duelIndex;
    const modalElement = document.querySelector('#exampleModal');
    if (modalElement) {
      (modalElement as any).modal('show');
    }
  }

  selectWinner1(index: number, duelIndex: number): void {
    console.log(`Winner index: ${index}, Duel index: ${duelIndex}`);
    if (this.currentDuelIndex === duelIndex) {
        this.sharedService.agregarGanadorRonda1(index, duelIndex);
    }
    // Close the modal manually if necessary
    const modalElement = document.querySelector('#exampleModal');
    if (modalElement) {
        (modalElement as any).modal('hide');
    }
  }

}
