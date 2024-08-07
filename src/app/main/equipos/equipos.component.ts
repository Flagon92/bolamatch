import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {

  constructor(public sharedService: SharedService){}

  cargarEquiposDefaultUno(): void {
    this.sharedService.setDisableRegistro(true);
    this.sharedService.participantes = [...this.sharedService.equiposDefaultUno];
  }

  cargarEquiposDefaultDos(): void {
    this.sharedService.setDisableRegistro(true);
    this.sharedService.participantes = [...this.sharedService.equiposDefaultDos];
  }

  cargarEquiposDefaultTres(): void {
    this.sharedService.setDisableRegistro(true);
    this.sharedService.participantes = [...this.sharedService.equiposDefaultTres];
  }

  disableRegistro() {
    this.sharedService.setDisableRegistro(true);
    this.sharedService.buttonClicked = true; 
  }

}