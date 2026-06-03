import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  template: `
    <app-home></app-home>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-site');
}
