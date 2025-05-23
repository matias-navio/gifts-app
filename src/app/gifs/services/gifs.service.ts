import { Gif } from './../interfaces/gif.interface';
import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphyinterface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifService {

  // inyectamos HttpClient para crear peticiones a la api
  private http = inject(HttpClient);

  // senal de una arreglo de gifs
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  // señal de gifs que buscamos
  searchGif = signal<Gif[]>([]);

  // señal de tipo record con una llave string y un valor que es un arreglo de Gif
  // ejemplo: {'goku': [gif1, gif2, gif3]}
  searchHistory = signal<Record<string, Gif[]>>({});
  // esto va a guardar las keys de lo que busque el usuario
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor(){
    this.loadTrendingGifs();
    console.log('Servicio creado');
  }

  // metodo que hace llamada de tipo get para obtener los gifs en tendencia
  loadTrendingGifs(){

    // armamos la URL con los environments
    this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
      },
    })
    .subscribe((resp) => {
      // con mapper convertimos la lista de gifs de la api a los que nosotros especificamos
      const gifs = GifMapper.mapGiphyItemsToArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log(gifs);
    })
  }

  // matodo para cargar los gifs que buscamos
  loadSearchGifs(query: string){
    // armamos la URL con environments y le mandamos los paramatros la query
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query,
      },
    }).pipe(
      // operador de rxjs para agarrar el valor obtenido y cambiarlo por algo
      map(({data}) => data),
      // obtenemos los gifs y a lo transformamos con mapper
      map((items) => GifMapper.mapGiphyItemsToArray(items)),

      // historial de busqueda
      tap(items => {
        this.searchHistory.update(history => ({
          ...history,
          [query.toLowerCase()]: items,
        }))
      })
    );
  }
}
