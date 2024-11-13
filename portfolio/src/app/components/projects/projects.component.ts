import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Focus 2.0',
      techStack: 'Angular, SCSS, HTML5, Angular Material, Bootstrap',
      description: [
        'Collaborated with Business Analysts to gather and analyze requirements for applications related to development of new screens and implementing new functionalities.',
        'Engineered responsive and dynamic user interfaces using Angular enhancing cross-device compatibility and significantly improving user experience across web platforms.',
        'Seamlessly integrated Graphql APIs to facilitate secure and efficient data exchange between systems.',
        'Employed Jasmine and Karma for automated unit testing, effectively identifying and resolving critical bugs, which resulted in a notable reduction in production issues and enhanced code quality.',
        'Recommended and implemented Prime NG and NG-Toast libraries for popup notifications, and successfully demonstrated both solutions to clients.',
        'Independently resolved all bugs from Team 3 and successfully delivered the fixes on time during project closure.',
        'Engaged in ongoing collaboration with stakeholders to prioritize features and enhancements based on evolving business needs'
      ]
    },
    {
      name: 'Odyssey',
      techStack: 'Angular, JavaScript, JSP, Manual Testing',
      description: [
        'Odyssey is a legacy Application which is built on Various technologies like Angular/JavaScript/Java 8 and used for to maintain Owner Manuals/Workshop Manuals of US Automobiles Company.',
        'Seamlessly integrated REST APIs to facilitate secure data exchange between the UI and backend.',
        'Worked on Enhancement team and also supported Testing team along with development in both Manual and regression Testing',
        'Post production Hotfixes and cleared all the frontend bugs from enhancement team.',
        'Provided Knowledge Transfer sessions to new joiners'
      ]
    },
    {
      name: 'Compass Modernization',
      techStack: 'Angular 17, CSS, HTML5, Bootstrap, NgRx, TypeScript',
      description: [
        'Modernisation of legacy PowerBuilder Application to Angular and Springboot web application',
        'Reusable Component Creation: Engineered a library of reusable UI components, streamlining the app development process and enhancing consistency across various projects.',
        'Real-Time Backend Integration: Integrated real-time backend services, enabling dynamic data interaction between UI and Backend.',
        'Developed new screens and functionalities according to the client requirement by cross verifying the validations with the legacy application',
        'Implemented 50+ Validations in a single screen and successfully delivered to the customer',
        'Initiated the implementation of NgRx in the application to manage state efficiently.'
      ]
    }
  ];
}
