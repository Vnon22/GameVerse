//js
function toggleTheme() {
  document.body.classList.toggle("light");
}


window.onload = function() {
  var searchInput = document.getElementById("searchBar");
  var cards = document.getElementsByClassName("game-card");

  searchInput.oninput = function() {
    var value = searchInput.value.toLowerCase();

    for (var i = 0; i < cards.length; i++) {
      var title = cards[i].getElementsByTagName("h3")[0].textContent.toLowerCase();

      if (title.includes(value)) {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
    }
  };
};

//GOD
document.addEventListener("DOMContentLoaded", function () {
  const games = [
    {title: "Pong", img: "pong.png", desc: "The classic 2D table tennis game.", link: "https://www.ponggame.org/"},
    {title: "Tetris", img: "tetris.jpeg", desc: "Arrange falling blocks to clear lines.", link: "https://play.tetris.com/"},
    {title: "Asteroids", img: "asteroids.jpeg", desc: "Destroy asteroids and survive in space.", link: "https://freeasteroids.org/"},
    {title: "Snake", img: "snake.png", desc: "Grow longer by eating food, avoid yourself!", link: "https://playsnake.org/"},
    {title: "Pac-Man", img: "pacman.png", desc: "Eat dots, avoid ghosts, and clear the maze.", link: "https://freepacman.org/"}
  ];

 
  let game = games[new Date().getDate() % games.length];


  document.getElementById("game-of-day-content").innerHTML =
    `<a href="${game.link}">
       <img src="${game.img}" alt="${game.title}" width="80">
       <h3>${game.title}</h3>
       <p>${game.desc}</p>
     </a>`;
});

//jquery

$("#game-of-day").hide().fadeIn(2000);


  $(".game-card").hover(
    function() {
      $(this).css("box-shadow", "0px 0px 15px #ff0050");
    },
    function() {
      $(this).css("box-shadow", "none");
    }
  );



$("#random-game").click(function () {
  let games = $(".game-card a"); // get all game links
  if (games.length > 0) {
    let random = games[Math.floor(Math.random() * games.length)];
    window.location.href = random.href; // go to random game page
  }
});


if ($("#featured-games li").length) {
  $("#featured-games li").hide().each(function (i) {
    $(this).delay(200 * i).slideDown(400);
  });
}

