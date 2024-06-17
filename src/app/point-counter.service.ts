import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointCounterService {
  private points :number = 0;

  constructor() { }

  public get sendPoints() { return this.points;};

  public set changePoints(newPoints : any) { this.points = newPoints;};
}
