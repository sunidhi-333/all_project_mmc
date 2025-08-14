import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculate } from './component/components/calculate/calculate';
import { Ptoducts } from './component/ptoducts/ptoducts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Calculate,Ptoducts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms');
}
