//Constructor for projects for filling modal content dynamically
function Project(title, summary, tech, githubLink, liveLink, imageLink) {
  this.title = title;
  this.githubLink = githubLink;
  this.liveLink = liveLink;
  this.summary = summary;
  this.tech = tech;
  this.image = imageLink;
}

let projects = [
  new Project(
    "SpartanFit",
    "Part fitness-app and part social-app, SpartanFit allows you to track workout progress, browse recipes, and connect with fitness partners.",
    "The application is powered by the MERN stack, and uses Chart.js to create visual representations of data. ",
    "https://github.com/Mlipphardt/SpartanFit",
    "https://spartanfit.herokuapp.com/",
    "./assets/images/SpartanFitDemo.png"
  ),
  new Project(
    "Your Library",
    "Your Library uses the powerful Google Books API to allow you to search for books and save them to your collection for later reading.",
    "Your Library is a MERN-stack application with Bootstrap CSS.",
    "https://github.com/Mlipphardt/Your-Library",
    "https://yourownlibrary.herokuapp.com/",
    "./assets/images/YourLibraryDemo.png"
  ),
  new Project(
    "Haggle-Haus",
    "Haggle-Haus is a social bartering application which invites you to post your unwanted items and trade them with others for items you need.",
    "Haggle-Haus utilizes MySQL, Bootstrap CSS, Node.js, and Passport for user authentication.",
    "https://github.com/cgrady3/Haggle-Haus",
    "http://haggle-haus.herokuapp.com/",
    "./assets/images/HaggleHausDemo.gif"
  ),
  new Project(
    "Centralized News",
    "Centralized News invites users to scrape articles from news websites, post comments, and save them for later browsing.",
    "Centralized News uses MongoDB to store its notes and articles, Mongoose as an ORM, Node.js for its server, and Cheerio for its web-scraping.",
    "https://github.com/Mlipphardt/News-Scraper/",
    "https://centralized-news.herokuapp.com/",
    "./assets/images/CentralizedNewsDemo.png"
  ),
  new Project(
    "FanFixx",
    "FanFixx allows users to search for their favorite athletes and find out their current schedule, team record, and see their latest instagram posts.",
    "FanFixx uses Firebase, the Instagram API, and theSportsDB API to retrieve its information.",
    "https://github.com/Mlipphardt/Fanfixx",
    "https://mlipphardt.github.io/Fanfixx/",
    "./assets/images/FanfixxDemo.gif"
  ),
  new Project(
    "Deep Sea Memory Game",
    "Deep Sea Memory Game tests your concentration and recollection. See how many animals you can find - but be careful, don't click on the same one twice, and beware of their swimming about!",
    "Deep Sea Memory Game utilizes React, and also features the Fischer-Yates shuffle. ",
    "https://github.com/Mlipphardt/Memory-Game",
    "https://mlipphardt.github.io/Memory-Game/",
    "./assets/images/MemoryGameDemo.png"
  ),
];

$(document).ready(function () {
  //When learn-more-btn is clicked, toggle modal and fill with appropriate content
  $(".learn-more-btn").on("click", function (event) {
    event.preventDefault();
    $("#project-modal").modal("toggle");
    let project = projects[$(this).attr("data-project-id")];
    $(".modal-title").text(project.title);
    $("#modal-summary").text(project.summary);
    $("#modal-tech").text(project.tech);
    $("#github-link").attr("href", project.githubLink);
    $("#github-link").text(project.title + " Github repository");
    $("#live-link").attr("href", project.liveLink);
    $("#live-link").text(project.title + " live");
    $(".modal-img").css("background-image", "url(" + project.image + ")");
  });
});
