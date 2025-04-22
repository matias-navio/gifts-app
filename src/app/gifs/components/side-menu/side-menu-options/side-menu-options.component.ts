import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Gif } from 'src/app/gifs/interfaces/gif.interface';
import { GifService } from 'src/app/gifs/services/gifs.service';
import { FormsModule } from '@angular/forms';

// interface para componentes de la barra lateral
interface MenuOptions{
  label: string;
  sublabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './side-menu-options.component.html'
})
export class SideMenuOptionsComponent {

  // iyectamos el servicio para obtener el historial
  gifService = inject(GifService);

  // Lista de personas
  personas = signal<string[]>([]);
  nuevaPersona = '';

  // arreglo de opciones en el menu
  menuOptions: MenuOptions[] = [
    // icono de fontAwesome, componente de gifs en tendencia
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifts Populares',
      route: '/dashboard/trending'
    },
    // componente para buscar gifs
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      sublabel: 'Buscar Gifts',
      route: '/dashboard/search'
    }
  ]

  agregarPersona() {
    if (this.nuevaPersona.trim()) {
      this.personas.update(personas => [...personas, this.nuevaPersona.trim()]);
      this.nuevaPersona = '';
    }
  }

  eliminarPersona(persona: string) {
    this.personas.update(personas => personas.filter(p => p !== persona));
  }
}
