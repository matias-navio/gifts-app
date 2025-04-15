import { Component } from '@angular/core';
import { SideMenuHeadersComponent } from "./side-menu-headers/side-menu-headers.component";
import { SideMenuOptionsComponent } from "./side-menu-options/side-menu-options.component";

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeadersComponent, SideMenuOptionsComponent],
  templateUrl: './gifs-side-menu.component.html'
})
export class  SideMenuComponent { }
