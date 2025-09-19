import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: []
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    // Menu icon navbar
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon!.addEventListener('click', () => {
      menuIcon!.classList.toggle('bi-x');
      menuIcon!.classList.toggle('bi-list');
      navbar!.classList.toggle('active');
    });

    // Scroll sections active link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        // Check if we're at the bottom of the page for the contact section
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

        if (isAtBottom && id === 'contact') {
          navLinks.forEach(link => link.classList.remove('active'));
          document.querySelector('header nav a[href="#contact"]')?.classList.add('active');
        } else if (top >= offset && top < offset + height && id !== 'contact') {
          navLinks.forEach(link => link.classList.remove('active'));
          document.querySelector(`header nav a[href="#${id}"]`)?.classList.add('active');
        }
      });

      // Sticky navbar
      const header = document.querySelector('.header');
      header!.classList.toggle('sticky', window.scrollY > 100);

      // Remove menu icon navbar when click navbar link (scroll)
      menuIcon!.classList.remove('bi-x');
      menuIcon!.classList.add('bi-list');
      navbar!.classList.remove('active');
    });

    // Smooth scrolling
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')!.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    // Dark light mode
    const darkModeIcon = document.querySelector('#darkMode-icon');
    darkModeIcon!.addEventListener('click', () => {
      darkModeIcon!.classList.toggle('bi-moon-stars-fill');
      darkModeIcon!.classList.toggle('bi-brightness-high-fill');
      document.body.classList.toggle('dark-mode');
    });

    // Scroll reveal
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top', distance: '50px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom', distance: '50px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left', distance: '50px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right', distance: '50px', duration: 2000, delay: 200 });
  }
}
