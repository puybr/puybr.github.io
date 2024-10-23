import Typed from 'typed.js';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import './style.scss';

// Typing effect with typed.js
const typed = new Typed('.text-animation', {
    strings: ['{ coder }.', '{ sysadmin }.', '{ developer }.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
  

let myProjects = [
  {
    title: 'Project 1',
    demo: 'https://github.com/puybr/',
    code: 'https://github.com/puybr/',
    description: 'Weather application using API calls',
  },
  {
    title: 'Project 2',
    demo: 'https://github.com/puybr/',
    code: 'https://github.com/puybr/',
    description: 'To-Do List created with JavaScript ES6 Modules',
  }
];//end of my projects

let mySkills = [
  {
    type: 'HTML',
    icon: `<i class='fab fa-html5'></i>`,
  },
  {
    type: 'CSS',
    icon: `<i class='fab fa-css3-alt'></i>`,
  },
  {
    type: 'JAVASCRIPT',
    icon: `<i class='fab fa-js-square'></i>`,
  },
  {
    type: 'PYTHON',
    icon: `<i class="fa fa-code" aria-hidden="true"></i>`
  },
  {
    type: 'GIT',
    icon: `<i class="fab fa-git-alt"></i>`,
  },
  {
    type: 'BASH',
    icon: `<i class="fa fa-terminal" aria-hidden="true"></i>`,
  },
  {
    type: 'REST API',
    icon: `<i class="fas fa-server"></i>`,
  },
  {
    type: 'DATABASES',
    icon: `<i class="fas fa-database"></i>`,
  },
  {
    type: 'CLOUD',
    icon: `<i class="fa fa-cloud" aria-hidden="true"></i>`
  },
  {
    type: 'WINDOWS & LINUX',
    icon: `<i class="fa fa-microchip" aria-hidden="true"></i>`
  },
  {
    type: 'TCP/IP',
    icon: `<i class="fa fa-wifi" aria-hidden="true"></i>`
  }
];//end of my skills


//render my projects
const projectContainer = document.querySelector('.project-container');
myProjects.forEach((project) => {
  const p = `
          <div class="card">
            <h3>${project.title}<hr></h3>
            <span>
              <div class="project-url">
                <a href=${project.demo} target="_blank"><div class="project-icons"><i class="fas fa-laptop-code"></i></div>Live Demo</a>
              </div>
              <div class="project-url">
                <a href=${project.code} target="_blank"><div class="project-icons"><i class="fas fa-file-code"></i></div>Code</a>
              </div>
              <p>${project.description}</p>
            </span>
          </div>
          `;
          projectContainer.insertAdjacentHTML('beforeend', p);
});


//render skills
const skillsContainer = document.querySelector('.skills-container');
mySkills.forEach((skill) => {
  const s = `
                <div class="skill">
                <div class="skill-icons">${skill.icon}</div>
                <p>${skill.type}</p>
                </div>
            `;
  skillsContainer.insertAdjacentHTML('beforeend', s); 
});


// 🍔 Hamburger Icon
const hamburgerIcon = document.querySelector('#hamburger');
hamburgerIcon.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('nav').style.display = 'flex';
  document.querySelectorAll('.sections').forEach((section) => {
    if (section.style.display === 'block') {
      section.style.display = 'none';
      document.querySelector('nav').style.display = 'none';
    } else {
      section.style.display = 'block';
    }
  });
});



/* Scrolling Functionality */
const homeButton = document.querySelector('#home');
const homeSection = document.querySelector('.home');
homeButton.addEventListener('click', (e) => {
  e.preventDefault();
  homeSection.scrollIntoView({behavior: "smooth"});
});

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
                                            <hr>
                                            © ${new Date().getFullYear()}
                                            <i class="fas fa-arrow-circle-up"></i>
                                            <a href="https://www.linkedin.com/in/chloeurisohn" target="_blank"><i class="fab fa-linkedin"></i></a>
                                            <a href="https://github.com/puybr" target="_blank"><i class="fab fa-github"></i></a>
                                            <a href="mailto:chloeurisohn@gmail.com" target="_blank"><i class="far fa-envelope"></i></a>
                                            `;