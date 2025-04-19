import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GiftListComponent } from "../../components/gift-list/gift-list.component";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GiftListComponent],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent {

  // inyectamos el servicios para obtener los gifs
  gifService = inject(GifService);
  // gifs que vamos a mostrar
  gifs = signal<Gif[]>([]);

  // metodo para llamar al servicios y que muestre los gifs
  onSearch(query: string){
    this.gifService.loadSearchGifs(query).subscribe((resp) => {
        this.gifs.set(resp);
      })
  }
}
