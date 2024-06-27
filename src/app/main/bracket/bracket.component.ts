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

  constructor(public sharedService: SharedService){}

  ngOnInit(): void {
    this.sharedService.getParticipantes().subscribe((data) => {
      this.sharedService.participantes = data;
    });
  }


}
