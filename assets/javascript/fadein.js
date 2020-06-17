// Makes the banner and name show up upon page load, without scroll.
/*
$(document).ready(function () {
   $("#banner").addClass("visible");
   $("#namewrapper").addClass("visible");
});
*/
// When user scrolls, if element has an animation, play it.
/*
$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $("div");

  for (let i = 0; i < tags.length; i++) {
    let tag = tags[i];
    if ($(tag).position().top < pageBottom && $(tag).attr("data-animation")) {
      $(tag).addClass($(tag).attr("data-animation"));
    }
  }
});
*/
let chartDrawn = false;

//After document has loaded, detect scrolling and see if animated elements need to fire.
$(document).ready(function () {
  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $("div");

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

      if (
        $(tag).offset().top + $(tag).outerHeight() < pageBottom &&
        $(tag).attr("data-animation")
      ) {
        $(tag).addClass($(tag).attr("data-animation"));
      }
    }
  });

  /*    
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
*/
});
