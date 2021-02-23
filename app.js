const addMovieModel = document.getElementById("add-table");
// const addMovieModel = document.querySelector('#add-modal');
// const addMovieModel = document.body.children[1];
//const startAddMovieButton = document.querySelector("header").lastElementChild;
const startAddMovieButton = document.querySelector("header button");
const maintable = document.getElementById("maintable");
const cancelAddMovieButton = addMovieModel.querySelector(".btn-cancel");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModel.querySelectorAll("input");
//const userInputs = addMovieModel.getElementsByTagName("input");

const movies = [];

const toggleMaintable = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModel = () => {
  addMovieModel.classList.toggle("visible");
  toggleMaintable();
};

const addMovieHandler = () => {
  const movieTitle = userInputs[0].value;
  const movieImageUrl = userInputs[1].value;
  const movieRating = userInputs[2].value;
  if (
    movieTitle.trim() === "" ||
    movieImageUrl.trim() === "" ||
    movieRating.trim() === "" ||
    movieRating < 1 ||
    movieRating > 5
  ) {
    alert("Please input valid value");
  }
  const newMovie = {
    title: movieTitle,
    imageUrl: movieImageUrl,
    rating: movieRating,
  };
  movies.push(newMovie);
  console.log(movies);
  toggleMovieModel();
  
  
  
};

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelAddMovie = () => {
  toggleMovieModel();
  clearMovieInputs();
};

const maintableClickHandler = () => {
  toggleMovieModel();
};

startAddMovieButton.addEventListener("click", toggleMovieModel);
maintable.addEventListener("click", maintableClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
confirmAddMovieButton.addEventListener("click", addMovieHandler);