import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Senior Systems Engineer (Front End Web Developer)',
      company: 'Infosys Limited',
      dates: 'Nov 2021 – Present',
      responsibilities: [
        'Developed and maintained web applications using the Angular framework and JavaScript for front-end development.Utilized Jasmine and Karma for writing unit tests and improving code quality.',
        'Integrated RESTful APIs and third-party services to expand application features and improve user engagement,enhancing functionality and interactivity',
        'Conducted comprehensive software testing, including unit, integration, and end-to-end testing, to identify and resolve software issues, ensuring delivery of high-quality, bug-free applications.',
        'Collaborated cross-functionally with product, design, to gather requirements, design and implement solutions, and alignfeatures with business objectives.',
        'Optimized application performance by performing code reviews, refactoring code, and implementing best practices for faster load times and improved application responsiveness.',
        'Applied responsive web design principles to ensure compatibility across mobile devices, tablets, and desktops, improving accessibility and user experience.',
        'Provided maintenance and updates for existing applications, delivering support and enhancements based on user feedback and evolving project requirements.',
        'Actively participated in Agile and Scrum processes, including daily stand-ups, sprint planning, and retrospectives, to improve team collaboration, project planning, and delivery timelines.',
        'Authored comprehensive documentation for codebases, API specifications, and application workflows, streamlining onboarding and supporting knowledge transfer.',
        'Developed and executed unit tests and integration tests with testing frameworks like Jasmine and Karma, improving software reliability, scalability, and maintainability.',
        'Mentored junior developers by providing technical guidance, sharing best practices, and assisting with troubleshootingto foster professional growth.',
        'Supported testing team by doing Manual and regression testing along with developement for 3 months.',
        'Engaged in continuous skill development through courses, certifications, and professional development activities to stay current with emerging technologies and industry standards'],
      expanded: false
    }
  ];

  toggleCollapse(index: number) {
    this.experiences[index].expanded = !this.experiences[index].expanded;
  }
}
