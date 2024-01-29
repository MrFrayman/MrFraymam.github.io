function main() {
  let loader = document.querySelector("#loader");
  let img = document.getElementById("img");
  let resultSpan = document.getElementById("res");

  loader.style.visibility = "visible"; // Show loader when button is clicked
  img.style.display = "none"; // Hide the image initially

  // Show loading screen for 5 seconds
  setTimeout(function () {
    loader.style.display = "none"; // Hide the loader
    img.style.display = "block"; // Show the image

    let isHeads = Math.random() < 0.5;

    if (isHeads) {
      resultSpan.textContent = "You flipped Heads!";
      img.src = "./heads.png";
    } else {
      resultSpan.textContent = "You flipped Tails!";
      img.src = "./tails.png";
    }

    // Change the result text to "Done" after 3 seconds
    setTimeout(function () {
      resultSpan.textContent = "Go On!";
    }, 3000); // 3000 milliseconds = 3 seconds
  }, 5000); // 5000 milliseconds = 5 seconds
}
