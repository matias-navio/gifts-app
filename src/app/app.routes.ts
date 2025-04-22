import { Routes } from '@angular/router';

export const routes: Routes = [
  // ruta padre de la app
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./gifs/pages/dashboard-page/dashboard-page.component'),
    // configuracion de rutas hijas
    children: [
      // primera ruta hija '/dashboard/trending'
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/pages/trending-page/trending-page.component'),
      },
      // segunda ruta hija '/dashboard/search'
      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/pages/search-page/search-page.component'),
      },
      // tercera ruta hija '/dashboard/history/?' para historial de busqueda
      {
        // con los dos puntos se hace dinamica
        path: 'history/:query',
        loadComponent: () =>
          import('./gifs/pages/gif-history/gif-history.component'),
      },
      // ruta default en cas de no encontrar dentro de /dashboard
      {
        path:'**',
        redirectTo:'trending'
      }
    ]
  },
  // ruta default en cas de no encontrar dentro de la app
  {
    path:'**',
    redirectTo:'dashboard'
  }
];
