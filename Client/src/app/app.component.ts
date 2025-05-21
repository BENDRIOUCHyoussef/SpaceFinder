import { Component } from '@angular/core';
import { HomeComponent } from "./pages/home/home.component";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, FormsModule, HttpClientModule],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-header></app-header>
      <main class="mt-16"> <!-- Added mt-16 (Tailwind) or adjust as needed -->
        <router-outlet></router-outlet>
      </main>
    </div>
   
  `,
  styles: [],
})
export class AppComponent {
  title = 'SpaceFinder';
}
