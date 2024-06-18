import { Component } from '@angular/core';
import { PointCounterService } from '../point-counter.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-decrement-button',
  standalone: true,
  imports: [],
  providers: [PointCounterService],
  templateUrl: './decrement-button.component.html',
  styleUrl: './decrement-button.component.css'
})
export class DecrementButtonComponent {

  PointCounterService = inject(PointCounterService);

  decrementScore() {
    this.PointCounterService.decrement();
  }

}
