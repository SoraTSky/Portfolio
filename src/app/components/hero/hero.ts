import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="relative min-h-screen pt-32 pb-24 px-4 md:pt-40 md:pb-32 flex items-center overflow-hidden">
      <!-- Cosmic Background -->
      <div class="absolute inset-0 opacity-40 pointer-events-none"
        style="background-image: url('https://d2xsxph8kpxj0f.cloudfront.net/310519663690878557/nxCKZmucFDXUWAUBs9FqDH/cosmic-space-bg-DcB43c3L39pRgy7qZobkfJ.webp' );
               background-size: cover;
               background-position: center;
               background-attachment: fixed;">
        <div class="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
      </div>

      <!-- Content -->
      <div class="container relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Left: Text Content -->
          <div class="space-y-8">
            <div class="space-y-4">
              <p class="text-accent text-sm font-semibold tracking-widest uppercase">
                Welcome to my portfolio
              </p>
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-serif">
                Crafting Digital <span class="accent-underline">Experiences</span>
              </h1>
              <p class="text-lg text-foreground/70 max-w-md leading-relaxed">
                Full-stack developer passionate about building beautiful, performant applications with modern
                technologies. Gamer, creator, and digital explorer.
              </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4 pt-4">
              <button class="btn-primary">
                View My Work →
              </button>
              <button class="btn-secondary">
                Get in Touch
              </button>
            </div>

            <!-- Social Links -->
            <div class="flex items-center gap-6 pt-8">
              <a href="https://github.com" target="_blank" class="text-foreground hover:text-accent transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" class="text-foreground hover:text-accent transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.598 2.897-1.598 2.117 0 3.704 1.384 3.704 4.362v5.589zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.759 1.948 1.71 0 .951-.761 1.71-1.991 1.71zm1.582 11.019H3.755V9.724h3.164v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
              <a href="mailto:contact@example.com" class="text-foreground hover:text-accent transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </div>

          <!-- Right: Hero Image -->
          <div class="hidden md:flex justify-center items-center">
            <div class="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
              <img src="https://via.placeholder.com/500x500?text=Your+Image" alt="Hero" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span class="text-foreground/60 text-sm">Scroll to explore</span>
          <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  `,
} )
export class HeroComponent {}
