import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { HeroComponent } from '../../components/hero/hero';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent],
  template: `
    <div class="min-h-screen bg-background text-foreground overflow-hidden">
      <app-navbar></app-navbar>
        <app-hero></app-hero>

      <!-- Projects Section -->
      <section id="projects" class="relative py-24 px-4 border-t border-border">
        <div class="container">
          <div class="space-y-16">
            <div class="space-y-4">
              <p class="text-accent text-sm font-semibold tracking-widest uppercase">Featured Work</p>
              <h2 class="text-4xl lg:text-5xl font-bold font-serif">
                Recent Projects
              </h2>
              <div class="w-12 h-1 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
            </div>
            <p class="text-foreground/60">Projects section coming soon...</p>
          </div>
        </div>
      </section>

      <!-- Hobbies Section -->
      <section id="hobbies" class="relative py-24 px-4 border-t border-border bg-card/20">
        <div class="container">
          <div class="space-y-16">
            <div class="space-y-4">
              <p class="text-accent text-sm font-semibold tracking-widest uppercase">Passions & Interests</p>
              <h2 class="text-4xl lg:text-5xl font-bold font-serif">
                What I Love
              </h2>
              <div class="w-12 h-1 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
            </div>

            <!-- Hobbies Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="card-glow group">
                <div class="space-y-4">
                  <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4m-4-4l-4 4m4-4l4-4"></path>
                    </svg>
                  </div>
                  <div class="space-y-2">
                    <h3 class="font-semibold text-lg font-serif">Web Development</h3>
                    <p class="text-foreground/60 text-sm leading-relaxed">Building modern, responsive web applications with cutting-edge technologies.</p>
                  </div>
                </div>
              </div>
              <!-- Add more hobby cards here -->
            </div>
          </div>
        </div>
      </section>

        <!-- About Section -->
      <section id="about" class="relative py-24 px-4 border-t border-border">
        <div class="container">
          <div class="space-y-6">
            <div class="space-y-4">
              <p class="text-accent text-sm font-semibold tracking-widest uppercase">About Me</p>
              <h2 class="text-4xl font-bold font-serif">
                Building the Future, One Line at a Time
              </h2>
            </div>
            <p class="text-foreground/60">About section coming soon...</p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="relative py-24 px-4 border-t border-border bg-card/20">
        <div class="container">
          <div class="max-w-2xl mx-auto text-center space-y-8">
            <div class="space-y-4">
              <p class="text-accent text-sm font-semibold tracking-widest uppercase">Get in Touch</p>
              <h2 class="text-4xl lg:text-5xl font-bold font-serif">
                Let's Create Something Amazing
              </h2>
            </div>
            <p class="text-foreground/60">Contact section coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrl: './home.css'
})
export class Home {}
