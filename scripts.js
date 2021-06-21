let listOfProjects = [
  {
    name: 'Pacmen',
    image: './packmen/pacmen.gif',
    url: './packmen/index.html'
  },
  {
    name: 'Eye',
    image: './eye/eye.gif',
    url: './eye/index.html'
  },
  {
    name: 'Real Time Bus Tracker',
    image: './bustracker/bustracker.gif',
    url: './bustracker/index.html'
  },
  {
    name: '<i class="fab fa-react"></i> Resume portfolio',
    image: './resumePortfolio/portfolio.gif',
    url: './resumePortfolio/index.html'
  },
]
let div = document.getElementById('projects-list')

let projects = listOfProjects.map(project => {
  return `
  <div class='col-md-6 d-flex justify-content-center pt-4'>
    <a class='project__item' href=${project.url}>
      <img class="project__item-img w-100 h-100 fluid" src=${project.image} />
      <h4 class="project__item-name">${project.name}</h4>
    </a>  
  </div>
  `
}).join(' ')

div.innerHTML = projects