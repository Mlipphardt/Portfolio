//Constructor for projects for filling modal content dynamically
function Project(title, summary, tech, githubLink, liveLink) {
  this.title = title;
  this.githubLink = githubLink;
  this.liveLink = liveLink;
  this.summary = summary;
  this.tech = tech;
}

let projects = [
  new Project(
    "SpartanFit",
    "SpartanFit is a project",
    "SpartanFit used tech",
    "www.google.com",
    "wwww.google.com"
  ),
  new Project(
    "SpartanFit",
    "SpartanFit is a project",
    "SpartanFit used tech",
    "www.google.com",
    "wwww.google.com"
  ),
  new Project(
    "SpartanFit",
    "SpartanFit is a project",
    "SpartanFit used tech",
    "www.google.com",
    "wwww.google.com"
  ),
  new Project(
    "SpartanFit",
    "SpartanFit is a project",
    "SpartanFit used tech",
    "www.google.com",
    "wwww.google.com"
  ),
  new Project(
    "SpartanFit",
    "SpartanFit is a project",
    "SpartanFit used tech",
    "www.google.com",
    "wwww.google.com"
  ),
  new Project(
    "SpartanFit",
    "SpartanFit is a project",
    "SpartanFit used tech",
    "www.google.com",
    "wwww.google.com"
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
  });
});
