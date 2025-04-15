import { Component } from '@angular/core';
// alias para que URL no sea compleja (esta en tsconfig.ts)
import { environment } from '@environments/environment';

@Component({
  selector: 'gifs-side-menu-headers',
  imports: [],
  templateUrl: './side-menu-headers.component.html'
})
export class SideMenuHeadersComponent {

  // environments para obtener datos fijos
  envs = environment;
}
