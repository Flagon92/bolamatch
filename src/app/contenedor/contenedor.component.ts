import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FooterComponent,RouterLinkActive],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {
  private images: string[] = [
    '../../assets/maradona.png',
    '../../assets/cubillas.png',
    '../../assets/pele.png',
    // agrega más rutas de imágenes aquí
  ];
  private imageIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startImageSlider();
  }

  ngOnDestroy(): void {
    this.stopImageSlider();
  }

  private startImageSlider(): void {
    this.intervalId = setInterval(() => {
      this.imageIndex = (this.imageIndex + 1) % this.images.length;
      const imageElement = document.getElementById('slideshow') as HTMLImageElement;
      if (imageElement) {
        imageElement.src = this.images[this.imageIndex];
      }
    }, 5000); // 5000 milisegundos = 5 segundos
  }

  private stopImageSlider(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
