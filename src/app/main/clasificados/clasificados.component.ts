import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clasificados',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './clasificados.component.html',
  styleUrl: './clasificados.component.css'
})
export class ClasificadosComponent {

  constructor(public sharedService: SharedService){}


  ngOnInit(): void {
    this.sharedService.getNombresEquipos();
  }

  siguienteRonda() {
    this.sharedService.siguienteRonda();
  }

}
