import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { ServicesComponent } from '../services/services.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    HostListener
  ]
})
export class HomeComponent {
  /*
  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.querySelector('.header');
    if (header) {
      header.classList.toggle('sticky', window.scrollY > 100);
    }
  }*/
}
