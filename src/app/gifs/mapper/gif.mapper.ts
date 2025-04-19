import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphyinterface";

// clase mapper para convertir lso gifs que vienen de la api en los
// gifs que son de uso iterno con los datos que necesitamos
export class GifMapper {

  // recibimos un item de la api y devolvemos los datos que queremos
  static mapGiphyItemToGif(item: GiphyItem): Gif{

    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    }
  }

  // metodo que transforma una lista de gifs que vienen de la api
  // en una lista de gifs internos con el metodo anterior
  static mapGiphyItemsToArray(items: GiphyItem[]): Gif[] {

    return items.map(this.mapGiphyItemToGif);
  }
}
