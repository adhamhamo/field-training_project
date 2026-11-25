
let buttons = document.querySelectorAll(".filter-buttons button");
let cards = document.querySelectorAll(".menu-card");

function activeButton(clickedButton) {

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    clickedButton.classList.add("active");
}


// Function to filter menu cards
function filterCards(category) {

    let filteredCards = Array.from(cards).filter(function(card) {

        return category === "all" ||
               card.dataset.category === category;

    });

    cards.forEach(function(card) {
        card.style.display = "none";
    });

    filteredCards.forEach(function(card) {
        card.style.display = "block";
    });
}


// Function to initialize menu filters
export function setupFilter() {

    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            let category = button.dataset.filter;

            activeButton(button);

            filterCards(category);

        });

    });

}
