let chartDrawn = false;

function removeActive() {
  var links = $("a.nav-item");
  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    if ($(link).hasClass("active")) {
      $(link).removeClass("active");
    }
  }
}

//After document has loaded, detect scrolling and see if animated elements need to fire.
$(document).ready(function () {
  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $("div.animated");
    var anchors = $("span.anchor");

    for (let i = 0; i < anchors.length; i++) {
      let anchor = anchors[i];
      let links = $("a.nav-item");
      if ($(anchor).offset().top + $(anchor).outerHeight() < pageBottom) {
        removeActive();
        $(links[i]).addClass("active");
      }
    }

    if (
      $("#skills-donut").offset().top + $("#skills-donut").outerHeight() <
        pageBottom &&
      chartDrawn === false
    ) {
      chartDrawn = true;
      var ctx = document.getElementById("skills-donut").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [
            "JavaScript",
            "CSS",
            "HTML",
            "PHP",
            "React",
            "Node",
            "MySQL",
            "MongoDB",
          ],
          datasets: [
            {
              data: [20, 20, 20, 10, 10, 10, 5, 5],
              backgroundColor: [
                "blue",
                "red",
                "green",
                "yellow",
                "orange",
                "purple",
                "pink",
                "violet",
              ],
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    }

    for (let i = 0; i < tags.length; i++) {
      let tag = tags[i];

      if ($(tag).offset().top + $(tag).outerHeight() < pageBottom) {
        $(tag).addClass($(tag).attr("data-animation"));
      }
    }
  });
});
