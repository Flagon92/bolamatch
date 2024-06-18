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

  
}
