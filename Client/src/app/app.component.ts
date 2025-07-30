import { Component } from '@angular/core';
import { HomeComponent } from "./pages/home/home.component";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, FormsModule, HttpClientModule],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-header></app-header>
      <main class="mt-20 md:mt-16 flex-1"> <!-- Added flex-1 to make main take remaining space -->
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
   
  `,
  styles: [],
})
export class AppComponent {
  title = 'SpaceFinder';
}
