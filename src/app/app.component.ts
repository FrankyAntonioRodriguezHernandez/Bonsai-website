import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroSectionComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class AppComponent {
  title = 'La-Familia-del-Bonsai-website';
}
