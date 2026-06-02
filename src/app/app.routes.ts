import { Routes } from '@angular/router';

// Importing matching your streamlined file names exactly
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Gaming } from './pages/gaming/gaming';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'gaming', component: Gaming },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback to Home
];
