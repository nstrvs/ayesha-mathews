function showContent() {
    let showContent = {
        sambanova: {
            image: 'https://uploads-ssl.webflow.com/647b560fa041413036759f33/65466b424c75805e8c5075cb_Intro_Showcase_AyeshaMathews_SN.jpg',
        },
        talkdesk: {
            image: 'https://uploads-ssl.webflow.com/647b560fa041413036759f33/65466b44c953fdb01a201650_TD_showcase_amw.png',
        },
    };

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

    function createContent(content) {
        let infoContainer = document.createElement('div');
        infoContainer.id = 'info-container';
        infoContainer.classList.add('info-container');
        document.body.appendChild(infoContainer);

        // Update the info container with the content
        infoContainer.innerHTML = `
            <img class="sc-image" src="${content}" />
        `;

        // Position the info container based on mouse position
        positionInfoContainer(e, infoContainer);
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
    }

    document.getElementById('sambanova').addEventListener('mouseover', (e) => {
        slide.addEventListener('mouseover', (e) => {
            // Get the content for this slide
            let content = showContent['sambanova'].image;

            createContent(content);

        });
    });

    document.getElementById('talkdesk').addEventListener('mouseover', (e) => {
        slide.addEventListener('mouseover', (e) => {
            // Get the content for this slide
            let content = showContent['talkdesk'].image;

            createContent(content);

        });
    });

}

export default showContent;
