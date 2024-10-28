"use strict";
import Typed from 'typed.js';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import './style.scss';

// Typing effect with typed.js
const typed = new Typed('.text-animation', {
    strings: ['--version'],
    typeSpeed: 100,
    backSpeed: 100,
    // loop: true,
  });
  

let myProjects = [
  {
    title: 'PROJECT_01',
    demo: 'https://github.com/puybr/',
    code: 'https://github.com/puybr/',
    description: 'Project 1 description ...',
  },
  {
    title: 'PROJECT_02',
    demo: 'https://github.com/puybr/',
    code: 'https://github.com/puybr/',
    description: 'Project 2 description ...',
  }
];//end of my projects


//render my projects
const projectContainer = document.querySelector('.project-container');
myProjects.forEach((project) => {
  const p = `
          <div class="card">
            <p><i class="fa fa-terminal"></i>${project.title}</p>
            <span class="project">
              <div class="project-url">
                <a href=${project.demo} target="_blank"><div class="project-icons"><i class="fas fa-laptop-code"></i></div>Live Demo</a>
              </div>
              <div class="project-url">
                <a href=${project.code} target="_blank"><div class="project-icons"><i class="fas fa-file-code"></i></div>Code</a>
              </div>
            </span>
            <p>${project.description}</p>
          </div>
          `;
          projectContainer.insertAdjacentHTML('beforeend', p);
});


// 🍔 Hamburger Icon
// const hamburgerIcon = document.querySelector('#hamburger');
// hamburgerIcon.addEventListener('click', (e) => {
//   e.preventDefault();
//   document.querySelector('nav').style.display = 'flex';
//   document.querySelectorAll('.sections').forEach((section) => {
//     if (section.style.display === 'block') {
//       section.style.display = 'none';
//       document.querySelector('nav').style.display = 'none';
//     } else {
//       section.style.display = 'block';
//     }
//   });
// });



/* Scrolling Functionality */
// const homeButton = document.querySelector('#home');
// const homeSection = document.querySelector('.home');
// homeButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   homeSection.scrollIntoView({behavior: "smooth"});
// });

const aboutButton = document.querySelector('#about');
const aboutSection = document.querySelector('.about');
aboutButton.addEventListener('click', (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({behavior: "smooth"});
});

const skillsButton = document.querySelector('#skills');
const skillsSection = document.querySelector('.skills');
skillsButton.addEventListener('click', (e) => {
  e.preventDefault();
  skillsSection.scrollIntoView({behavior: "smooth"});
});

const projectsButton = document.querySelector('#projects');
const projectsSection = document.querySelector('.projects');
projectsButton.addEventListener('click', (e) => {
  e.preventDefault();
  projectsSection.scrollIntoView({behavior: "smooth"});
});

// window.addEventListener('scroll', function() {
//   console.log('scrolling');
//   console.log(window.pageYOffset);
// });


// F O O T E R
document.querySelector('footer').innerHTML = `
                                            <section>
                                            © ${new Date().getFullYear()}
                                            <div class="footer-icons">
                                            <a href="https://www.linkedin.com/in/chloeurisohn" target="_blank"><i class="fab fa-linkedin"></i></a>
                                            <a href="https://github.com/puybr" target="_blank"><i class="fab fa-github"></i></a>
                                            <a href="mailto:chloeurisohn@gmail.com" target="_blank"><i class="far fa-envelope"></i></a>
                                            </div>
                                            </section>
                                            `;