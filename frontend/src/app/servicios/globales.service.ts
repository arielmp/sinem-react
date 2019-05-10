import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalesService {

  URL_API: string = 'http://localhost:3000/api/';
  //URL_API: string = '/api/';

  constructor() { }
}
