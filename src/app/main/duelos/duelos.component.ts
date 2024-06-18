import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-duelos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './duelos.component.html',
  styleUrls: ['./duelos.component.css']
})
export class DuelosComponent {

  constructor(public sharedService: SharedService){}

  ////ESTO AUN NO LO USAMOS, PARA PROXIMOS AVANCES.

  // getNamesInPairs(): string[][][] { 
  //   const pairs = [];
  //   for (let j = 0; j < this.sharedService.winnersTotal.length; j++) {
  //     const roundPairs = [];
  //     for (let i = 0; i < this.sharedService.winnersTotal[j].length; i += 2) {
  //       roundPairs.push([this.sharedService.winnersTotal[j][i], this.sharedService.winnersTotal[j][i + 1]]);
  //     }
  //     pairs.push(roundPairs);
  //   }
  //   return pairs;
  // }

  
  
}



