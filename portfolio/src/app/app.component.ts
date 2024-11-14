import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';  // Import standalone component
import { AboutMeComponent } from './about-me/about-me.component';  // Same for other components
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Mark this as a standalone component too
  imports: [
    HeaderComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
}
