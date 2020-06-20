let titles = [
  "SpartanFit",
  "Your Library",
  "Haggle-Haus",
  "Centralized News",
  "Fanfixx",
  "Deep Sea Memory Game",
];

$(document).ready(function () {
  $(".learn-more-btn").on("click", function (event) {
    event.preventDefault();
    $("#project-modal").modal("toggle");
    let project = $(this).attr("data-project-id");
    $(".modal-title").text(titles[project]);
  });
});
