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

  duelos: {
    nombreEquipo: string;
    procedencia: string;
    representante: string;
    email: string;
    telefono: string;
  }[][] = [];

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getDuelos().subscribe((data) => {
      this.duelos = this.chunkArray(data, 2);
    });
  }

  private chunkArray(myArray: any[], chunk_size: number) {
    const results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  }


}
