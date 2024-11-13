import { Routes } from '@angular/router';

import { SummaryComponent } from './components/summary/summary.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  { path: '', component: SummaryComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'projects', component: ProjectsComponent }
];
