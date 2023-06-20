import Typed from 'typed.js';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// Typing effect with typed.js
const typed = new Typed('.text-animation', {
    strings: ['coder.', 'graphic designer.', 'computer nerd.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });


let myProjects = [
  {
    title: 'The Cloud Resume Challenge',
    demo: 'https://www.chloeurisohn.com/',
    code: 'https://github.com/ghost-goblin/cloud-resume-challenge/',
    description: '☁️ Resume hosted in S3, distributed by CloudFront with a backend hooked to Lambda Functions',
  },
  {
    title: 'Weather App',
    demo: 'https://ghost-goblin.github.io/weather-app/',
    code: 'https://github.com/ghost-goblin/weather-app/',
    description: '☀️ Weather application using API calls',
  },
  {
    title: 'To-do List',
    demo: 'https://ghost-goblin.github.io/to-do-list/',
    code: 'https://github.com/ghost-goblin/to-do-list/',
    description: '✔️ To-Do List created with JavaScript ES6 Modules',
  },
  {
    title: 'Pizza Hex',
    demo: 'https://ghost-goblin.github.io/pizza-hex/',
    code: 'https://github.com/ghost-goblin/pizza-hex/',
    description: '🧙‍♀️ 16-bit Arcade Game made with PhaserJS',
  },
  {
    title: 'My Library',
    demo: 'https://ghost-goblin.github.io/library/',
    code: 'https://github.com/ghost-goblin/library/',
    description: '📕 Library Project using JavaScript Objects',
  },
  {
    title: 'Restaurant Page',
    demo: 'https://ghost-goblin.github.io/restaurant-page/',
    code: 'https://github.com/ghost-goblin/restaurant-page/',
    description: '🍕 Restaurant site with dynamic tabbed browsing functionality',
  },
  {
    title: 'Tic Tac Toe',
    demo: 'https://ghost-goblin.github.io/tic-tac-toe/',
    code: 'https://github.com/ghost-goblin/tic-tac-toe/',
    description: '🕹️ A Tic Tac Toe game you can play in your browser',
  },
  {
    title: 'Calculator',
    demo: 'https://ghost-goblin.github.io/calculator/',
    code: 'https://github.com/ghost-goblin/calculator/',
    description: '🧮 Calculator App with JavaScript',
  },
  {
    title: 'Pixelator',
    demo: 'https://ghost-goblin.github.io/etch-a-sketch/',
    code: 'https://github.com/ghost-goblin/etch-a-sketch/',
    description: '✏️ Etch-A-Sketch made with HTML, CSS & JavaScript',
  },
  {
    title: 'Rock Paper Scissors',
    demo: 'https://ghost-goblin.github.io/rock-paper-scissors/',
    code: 'https://github.com/ghost-goblin/rock-paper-scissors/',
    description: '✋ Play Rock, Paper, Scissors with JavaScript',
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
                <p><b>${skill.type}</b></p>
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
const aboutShortcut = document.querySelector('#aboutShortcut');
const aboutSection = document.querySelector('.about');
aboutButton.addEventListener('click', (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({behavior: "smooth"});
});
aboutShortcut.addEventListener('click', (e) => {
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
const projectShortcut = document.querySelector('#projectShortcut');
const projectsSection = document.querySelector('.projects');
projectsButton.addEventListener('click', (e) => {
  e.preventDefault();
  projectsSection.scrollIntoView({behavior: "smooth"});
});
projectShortcut.addEventListener('click', (e) => {
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
                                            `;