import { Component } from '@angular/core';
import { PointCounterService } from '../point-counter.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-increment-button',
  standalone: true,
  imports: [],
  providers: [PointCounterService],
  templateUrl: './increment-button.component.html',
  styleUrl: './increment-button.component.css'
})
export class IncrementButtonComponent {
  PointCounterService = inject(PointCounterService);
  localPoints = PointCounterService.prototype.sendPoints;

  incrementScore() {
    this.localPoints++;
    this.PointCounterService.changePoints(this.localPoints);
  }
}
