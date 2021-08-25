

// let listOfProjects = [
//   {
//     name: 'Pacmen',
//     image: './packmen/pacmen.gif',
//     url: './packmen/index.html'
//   },
//   {
//     name: 'Eye',
//     image: './eye/eye.gif',
//     url: './eye/index.html'
//   },
//   {
//     name: 'Real Time Bus Tracker',
//     image: './bustracker/bustracker.gif',
//     url: './bustracker/index.html'
//   },
//   {
//     name: '<i class="fab fa-react"></i> Resume portfolio',
//     image: './resumePortfolio/portfolio.gif',
//     url: './resumePortfolio/index.html'
//   },
// ]
// let div = document.getElementById('projects-list')

// let projects = listOfProjects.map(project => {
//   return `
//   <mit-project 
//     name="${project.name}"
//     image="${project.image}"
//     url="${project.url}"
//   ><mit-project />
//   `
// }).join(' ')
// console.log(projects)
// div.innerHTML = projects

import './project.js'

window.addEventListener('load', ()=> {
    createProjectList();
});

async function createProjectList(){
    const response = await fetch('./projects.json');
    const json     = await response.json();
    const projects    = document.getElementById('projects-list');

    json.projects.forEach((project) => {
        const element = document.createElement('mit-project');
        element.classList.add("col-md-6")
        element.classList.add("d-flex")
        element.classList.add("justify-content-center")
        element.classList.add("pt-4")
        element.project = project;
        projects.appendChild(element);
    })
}

var history = '';
var routes = {
  '':          'home.html',     
  '/':         'home.html',
  '#/pacmen':    './packmen/index.html',                
  '#/realtime':  './bustracker/index.html',        
  '#/eye':    './bustracker/index.html',
  '#/resume': './resumePortfolio/index.html',
};

async function router(){
  console.log(location.hash);
  var innerElement = '';

  // get requested page
  var link = window.location.hash;

  // ----------------------------------------
  // If more than one parameter in the link, 
  // I am targeting an element in the page, 
  // an anchor. First load page, the scroll
  // the element into view.
  // ----------------------------------------

  var count = (link.split("/").length - 1);        
  if (count > 1) {
      // anchor element 
      innerElement = link.split("/")[2];            

      // page to load
      link = '#/' + link.split("/")[1];
  }

  // ----------------------------------------
  // Remember loaded page - used to avoid
  // page reload on internal linking
  // ----------------------------------------        
  if (history === link && innerElement){
      scrollIntoView(innerElement);
      history = link;
      return;            
  }
  history = link;  

  // get path (route) for page
  var route = routes[link];

  // if route exists, load page
  if (route) loadPage(route, innerElement);
};
router();

async function loadPage(url, innerElement){
  // load page
  const res     = await fetch(url);
  const content = await res.text();
  const element = document.getElementById('content');
  element.innerHTML = content;

  // ------------------------------------------
  // Scroll to top -- need to avoid navigation 
  // drift on page. Else the scroll state 
  // carries over on to next page
  // ------------------------------------------
  window.scrollTo(0, 0);


  // element scroll into view
  if (innerElement) {            
      scrollIntoView(innerElement);
  }        
}

function scrollIntoView(id){
  document.getElementById(id).scrollIntoView();
}

window.addEventListener('hashchange', router);    
{/* <div class='col-md-6 d-flex justify-content-center pt-4'>
    <a class='project__item' href=${project.url}>
      <img class="project__item-img w-100 h-100 fluid" src=${project.image} />
      <h4 class="project__item-name">${project.name}</h4>
    </a>  
  </div> */}