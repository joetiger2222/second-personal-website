import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-personal-website2';
  download(){
    var pdfUrl='assets/Youssef Mohammed.pdf';
    window.open(pdfUrl,'_blank');
  }
  scrollToAboutMe() {
    var aboutElement = document.getElementById('aboutMe');
    if (aboutElement) {
      window.scrollTo({
        top: aboutElement.offsetTop,
        behavior: 'smooth' // Optional: Adds smooth scrolling animation
      });
    }
  }
  scrollToExp(){
    var expElement = document.getElementById('experience');
    if(expElement){
      window.scrollTo({
        top: expElement.offsetTop,
        behavior: 'smooth' // Optional: Adds smooth scrolling animation
      });
    }
  }
  scrollToProjects(){
    var projects = document.getElementById('projects');
    if(projects){
      window.scrollTo({
        top: projects.offsetTop,
        behavior: 'smooth' // Optional: Adds smooth scrolling animation
      });
    }
  }
  
}
