import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private numPlaca: string='';

  constructor() { }

  setNumPlaca(numPlaca: string) {
    this.numPlaca = numPlaca;
  }

  getNumPlaca(): string {
    return this.numPlaca;
  }
}