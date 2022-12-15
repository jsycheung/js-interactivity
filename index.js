// console.log("hello world");
const message = document.querySelector("#message");

function revealMessage() {
  message.classList.remove("hide");
  setTimeout(() => message.classList.add("hide"), 1000);
}

function deleteMovie(event) {
  message.textContent = `${event.target.previousElementSibling.textContent} deleted!`;
  event.target.parentNode.remove();
  revealMessage();
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = `${event.target.textContent} watched!`;
  } else {
    message.textContent = `${event.target.textContent} added back!`;
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
