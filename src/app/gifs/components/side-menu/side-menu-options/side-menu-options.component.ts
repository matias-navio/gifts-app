import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// interface para componentes de la barra lateral
interface MenuOptions{
  label: string;
  sublabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html'
})
export class SideMenuOptionsComponent {

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

}
