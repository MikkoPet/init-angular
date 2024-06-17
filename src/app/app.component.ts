import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncrementButtonComponent } from './increment-button/increment-button.component';
import { DecrementButtonComponent } from './decrement-button/decrement-button.component';
import { PointCounterService } from './point-counter.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IncrementButtonComponent, DecrementButtonComponent],
  providers: [PointCounterService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testingAngular';
  PointCounterService = inject(PointCounterService);
  points = PointCounterService.prototype.sendPoints;
}
