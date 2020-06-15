// Makes the banner and name show up upon page load, without scroll.
/*
$(document).ready(function () {
   $("#banner").addClass("visible");
   $("#namewrapper").addClass("visible");
});
*/
// When user scrolls, if element has an animation, play it.
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
