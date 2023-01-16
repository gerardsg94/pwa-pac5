import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GifDTO } from '../models/gifDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private urlApi: string;
  private urlApiSearch: string;
  private key: string;
  private controller: string;
  private urlApiId: string;

  constructor(private http: HttpClient) {
    this.key = '?api_key=cR7Y9ftWfRGHMu4f9vHpGmd84LQIr7Ix&q';
    this.urlApi = 'https://api.giphy.com/v1/gifs/';
    this.controller = 'search'
  }

  getAllGifs(): Observable<GifDTO[]> {
    return this.http.get<GifDTO[]>(this.urlApi+this.controller+this.key+'=futbol');
  }

  getGifByID(id): Observable<any> {
    return this.http.get<GifDTO[]>(this.urlApi+id+this.key);
  }

}
