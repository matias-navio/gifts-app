import { Component, input } from '@angular/core';
import { GiftListItemComponent } from "./gift-list-item/gift-list-item.component";
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gift-list',
  imports: [GiftListItemComponent],
  templateUrl: './gift-list.component.html',
})
export class GiftListComponent {

  gifs = input.required<Gif[]>();
}
