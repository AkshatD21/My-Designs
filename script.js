document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");

    // Fetch images from JSON file
    fetch("images.json")
        .then(response => response.json())
        .then(data => {
            // Load images within cards dynamically
            data.forEach(imageData => {
                const card = document.createElement("div");
                card.className = "card";

                const img = document.createElement("img");
                img.src = imageData.image;

                card.appendChild(img);
                imageContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching images:", error));
});
