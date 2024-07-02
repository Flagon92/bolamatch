import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './main/registro/registro.component';
import { EquiposComponent } from './main/equipos/equipos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewComponent } from './view/view.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    CommonModule, 
    FormsModule, 
    NavbarComponent, 
    RegistroComponent, 
    EquiposComponent,
    FooterComponent,
    ViewComponent],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'
})

export class AppComponent {

  constructor(public sharedService: SharedService){}

}