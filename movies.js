let movies = [{
        title: "Hets",
        image: "https://m.media-amazon.com/images/M/MV5BYTg0NGMyOWYtMzM5Yi00NDczLTlmZjItMzc3NDc1NGZiMmRjXkEyXkFqcGdeQXVyNzQxNDExNTU@._V1_UY268_CR0,0,182,268_AL_.jpg",
        rating: 7.3
    },
    {
        title: "Heat",
        image: "https://m.media-amazon.com/images/M/MV5BNDc0YTQ5NGEtM2NkYS00MWRhLThiNzAtNmY3NWU3YzNkMjIyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        rating: 8.2
    },
    {
        title: "Eat, pray, love",
        image: "https://m.media-amazon.com/images/M/MV5BMTY5NDkyNzkyM15BMl5BanBnXkFtZTcwNDQyNDk0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        rating: 5.8
    }
]

// Rendera (dvs rita upp) filmerna.
function renderMovies() {
    var main = document.getElementsByTagName("main");
    // Börja med att rensa main.
    main[0].innerHTML = "";
    movies.forEach(movie => {
        var movieElement = document.createElement("div");
        movieElement.innerHTML = `
            <img src="${movie.image}" />
            <h1>${movie.title}</h1>
            <p>rating: ${movie.rating}</p>
        `
        main[0].appendChild(movieElement);
    });
}

function sortMovies() {
    movies.sort(function (a, b) {
        if (a.rating > b.rating)
            return -1;
        if (a.rating < b.rating)
            return 1;
    })
}

function populateSelect() {
    var selector = document.getElementsByTagName("select")
    movies.forEach(function (movie) {
        var option = document.createElement("option");
        option.value = movie.title;
        option.innerText = movie.title;
        selector[0].appendChild(option);
    })
}

function rateMovie() {
    var selector = document.getElementsByTagName("select");
    var selected = selector[0].selectedIndex;
    var selectedMovie = selector[0].options[selected].value;
    var rating = document.getElementsByTagName("input");
    // Get index of movietitle
    let index = movies.findIndex(function (movie) {
        return movie.title == selectedMovie;
    });
    movies[index].rating = rating[0].value;
    sortMovies();
    renderMovies();
}

document.addEventListener('DOMContentLoaded', function () {
    sortMovies();
    populateSelect();
    renderMovies();
    var button = document.getElementById("rate");
    button.addEventListener("click", rateMovie);
})