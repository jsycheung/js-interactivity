// console.log("hello world");
const message = document.querySelector("#message");

function deleteMovie(event) {
  message.textContent = "Movie deleted!";
  event.target.parentNode.remove();
  console.log("deleted");
}
function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = "Movie watched!";
  } else {
    message.textContent = "Movie added back!";
  }
}
function addMovie(event) {
  const inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  const deleteBtn = document.createElement("button");
  movieTitle.textContent = inputField.value;
  deleteBtn.textContent = "X";
  event.preventDefault();
  document.querySelector("ul").appendChild(movie);
  movie.appendChild(movieTitle);
  movie.appendChild(deleteBtn);
  movieTitle.addEventListener("click", crossOffMovie);
  deleteBtn.addEventListener("click", deleteMovie);
  inputField.value = "";
}

document.querySelector("form").addEventListener("submit", addMovie);
