import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  constructor(private router: Router, public sharedService: SharedService) {}

  crearTorneo() {
    this.sharedService.resetTorneo();  // Resetea el estado
    this.router.navigate(['/contenedor']);  // Navega a la vista de creación de torneo
  }
}
