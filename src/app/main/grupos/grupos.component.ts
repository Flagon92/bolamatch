import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.css'
})
export class GruposComponent {

  constructor(public sharedService: SharedService) { }



  toggleDiv() {
    this.sharedService.isDivDisabled = !this.sharedService.isDivDisabled;
  }

  barajarGrupos(): void {
    this.sharedService.barajarGrupos();
    this.sharedService.sortearGruposConfirmado = true;
  }

  confirmarSorteoGrupos() {
    this.sharedService.sortearGruposDeshabilitado = false;
    this.sharedService.sortearGruposConfirmado = false;
  }
  seleccionarEquipo(equipo: any, grupoIndex: number) {
    this.sharedService.seleccionarEquipo(equipo, grupoIndex);
  }

  estaSeleccionado(equipo: any, grupoIndex: number) {
    return this.sharedService.estaSeleccionado(equipo, grupoIndex);
  }

  yaSeleccionados(grupoIndex: number) {
    return this.sharedService.yaSeleccionados(grupoIndex);
  }

  obtenerPosicion(equipo: any, grupoIndex: number) {
    return this.sharedService.obtenerPosicion(equipo, grupoIndex);
  }

  ordenarCruces() {
    this.sharedService.ordenarCruces();
  }

  isSeleccionado(equipo: string): boolean {
    return this.sharedService.isSeleccionado(equipo);
  }
}
