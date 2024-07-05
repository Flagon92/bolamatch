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

  partidos: { nombreEquipo: string }[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    
  }

  barajar(): void {
    this.sharedService.randomizarEquipos();
    this.partidos = this.sharedService.resultadosArreglo;
    this.sortearDeshabilitado = false;
  }

  sortearDeshabilitado: boolean = true;
}
