class Project extends HTMLElement {
  constructor() {
    super();
  }

  set project(project){
    this.innerHTML = `
        <a class='project__item' href=${project.url}>
          <img class="project__item-img w-100 h-100 fluid" src=${project.image} />
          <h4 class="project__item-name">${project.name}</h4>
        </a>
    `;    
      
  }
}

// Define the new element
customElements.define('mit-project', Project);