import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './main/registro/registro.component';
import { EquiposComponent } from './main/equipos/equipos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DuelosComponent } from './main/duelos/duelos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, NavbarComponent, RegistroComponent, EquiposComponent, DuelosComponent, FooterComponent],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'
})

export class AppComponent { 
  title = 'bolamatch';
}
