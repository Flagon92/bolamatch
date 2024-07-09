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
    this.sharedService.participantes = [...this.sharedService.equiposDefaultUno];
  }

  cargarEquiposDefaultDos(): void {
    this.sharedService.participantes = [...this.sharedService.equiposDefaultDos];
  }

}