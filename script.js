    // Select all game containers
    const gameContainers = document.querySelectorAll(".image-container");

    gameContainers.forEach(container => {
        // Store the original content in data attributes for later restoration
        const imgElement = container.querySelector("img");
        const titleElement = container.querySelector("h2");

        container.dataset.img = imgElement.src;
        container.dataset.title = titleElement.textContent;

        container.addEventListener("click", () => {
            // Check if the clicked container already shows info
            const isShowingInfo = container.classList.contains("showing-info");

            // Reset any other containers currently showing info
            gameContainers.forEach(item => {
                if (item.classList.contains("showing-info") && item !== container) {
                    restoreOriginalContent(item);
                }
            });

            // Toggle the clicked container
            if (isShowingInfo) {
                // Restore original content
                restoreOriginalContent(container);
            } else {
                // Show game info
                showGameInfo(container);
            }
        });
    });

    // Function to restore original content
    function restoreOriginalContent(container) {
        const imgSrc = container.dataset.img;
        const title = container.dataset.title;

        container.innerHTML = `
            <img src="${imgSrc}" alt="${title}" />
            <h2>${title}</h2>
        `;
        container.classList.remove("showing-info");
    }

    // Function to show game info
    function showGameInfo(container) {
        const gameInfo = container.getAttribute("data-info");
        container.innerHTML = `<p>${gameInfo}</p>`;
        container.classList.add("showing-info");
    }