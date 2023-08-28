function showContent() {
    let showContent = [
        {
          image: 'https://via.placeholder.com/150',
          year: 'year1',
          title: 'title1',
          description: 'description1'
        },
        {
          image: 'https://via.placeholder.com/150',
          year: 'year2',
          title: 'title2',
          description: 'description2'
        },
        {
          image: 'https://via.placeholder.com/150',
          year: 'year2',
          title: 'title2',
          description: 'description2'
        },
        {
          image: 'https://via.placeholder.com/150',
          year: 'year2',
          title: 'title2',
          description: 'description2'
        },
        {
          image: 'https://via.placeholder.com/150',
          year: 'year2',
          title: 'title2',
          description: 'description2'
        },
        {
          image: 'https://via.placeholder.com/150',
          year: 'year2',
          title: 'title2',
          description: 'description2'
        },
        {
          image: 'https://via.placeholder.com/150',
          year: 'year2',
          title: 'title2',
          description: 'description2'
        },
        {
          image: 'https://via.placeholder.com/150',
          year: 'year2',
          title: 'title2',
          description: 'description2'
        },
        {
          image: 'https://via.placeholder.com/150',
          year: 'year2',
          title: 'title2',
          description: 'description2'
        },
    
        // other object elements are omitted for brevity
    ];
    
    // Listen for mouseover event on each slide
    document.querySelectorAll('.card-container').forEach((slide, index) => {
        slide.addEventListener('mouseover', (e) => {
            // Get the content for this slide
            let content = showContent[index];
    
            // Create the info container
            let infoContainer = document.createElement('div');
            infoContainer.id = 'info-container';
            infoContainer.classList.add('info-container');
            document.body.appendChild(infoContainer);
    
            // Update the info container with the content
            infoContainer.innerHTML = `
                    <img class="sc-image" src="${content.image}" />
                    <p class="general-text">${content.year}</p>
                    <h1 class="title small lowercase">${content.title}</h1>
                    <p class="general-text">${content.description}</p>
                `;
    
            // Position the info container based on mouse position
            positionInfoContainer(e, infoContainer);
        });
    
        // Listen for mousemove event to update the position of the info container
        slide.addEventListener('mousemove', (e) => {
            let infoContainer = document.getElementById('info-container');
            positionInfoContainer(e, infoContainer);
        });
    
        // Listen for mouseout event to hide the info container
        slide.addEventListener('mouseout', () => {
            let infoContainer = document.getElementById('info-container');
            infoContainer.remove();
        });
    });
    
    // Function to position the info container based on mouse position
    function positionInfoContainer(e, infoContainer) {
        if (e.clientX < document.documentElement.clientWidth / 2) {
            infoContainer.style.left = `${e.clientX}px`;
            infoContainer.style.right = 'auto';
        } else {
            infoContainer.style.right = `${document.documentElement.clientWidth - e.clientX}px`;
            infoContainer.style.left = 'auto';
        }
    
        if (e.clientY < document.documentElement.clientHeight / 2) {
            infoContainer.style.top = `${e.clientY}px`;
            infoContainer.style.bottom = 'auto';
        } else {
            infoContainer.style.bottom = `${document.documentElement.clientHeight - e.clientY}px`;
            infoContainer.style.top = 'auto';
        }
    }  
}

export default showContent;
