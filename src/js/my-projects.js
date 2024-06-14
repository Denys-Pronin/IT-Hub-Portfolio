document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { image: '../img/my-projects/Rectangle 10.jpg', tech: 'React, JavaScript, Node JS, Git', name: 'power pulse webservice ' },
        { image: '../img/my-projects/Rectangle 7.jpg', tech: 'Angular, TypeScript, Node JS, Git', name: 'mimino website' },
        { image: '../img/my-projects/Rectangle 8.jpg', tech: 'Vue, JavaScript, Node JS, Git', name: 'vyshyvanka vibes Landing Page' },
        { image: '../img/my-projects/Rectangle 6.jpg', tech: 'React Native, JavaScript, Git', name: 'chego jewelry website' },
        { image: '../img/my-projects/Rectangle 4.jpg', tech: 'Svelte, JavaScript, Node JS, Git', name: 'energy flow webservice' },
        { image: '../img/my-projects/Rectangle 5.jpg', tech: 'React, JavaScript, Express, MongoDB', name: 'fruitbox online store' },
        { image: '../img/my-projects/first screen 1.jpg', tech: 'React, JavaScript, Express, MongoDB', name: 'starlight studio landing page' }
    ];
    
    const projectsContainer = document.getElementById('project-container');
    const loadMoreButton = document.getElementById('load-more-button');
    let projectsLoaded = 0;
    const projectsToLoad = 3;

    function loadProjects() {
        const nextProjects = projects.slice(projectsLoaded, projectsLoaded + projectsToLoad);
        nextProjects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.innerHTML = `
            <ul class="project-container">
        <li>

             <div class="image-wrapper">
                <img src="${project.image}" alt="${project.name}">
            </div>
            <div class="text-container">
                <p class="stack-teh">${project.tech}</p>
                <div class="text-button">
                <h3 class="name-project">${project.name}</h3>
                <div class="form-container">
                    <form action="https://github.com/Denys-Pronin/IT-Hub-Portfolio" method="get">
                        <button type="submit" class="projects-button">VISIT
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.75 19.25L19.25 4.75M19.25 4.75H5.75M19.25 4.75V18.25" stroke="#00B068" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </form>
                </div>
                </div>
            </div>
            
             </li>
    </ul>`;
            projectsContainer.appendChild(projectItem);
        });
        projectsLoaded += projectsToLoad;
        if (projectsLoaded >= projects.length) {
            loadMoreButton.style.display = 'none';
        }
    }

    loadMoreButton.addEventListener('click', loadProjects);

    // Завантажити початкові проекти
    loadProjects();
});