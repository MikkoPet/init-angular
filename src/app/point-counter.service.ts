import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointCounterService {
  points : number = 0;

  constructor() { }

  public increment() {
    this.points++;
  };

  public decrement(){
    this.points--;
  };
}
