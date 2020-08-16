mediumZoom("[data-zoomable], .site-project-single-images img", {
  background: "rgba(10,9,25,.9)",
  scrollOffset: 0,
  container: {
    top: 150,
    bottom: 150,
  },
});

$(document).ready(function () {
  "use strict";
  // Scroll to top
  $("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Smooth scroll
  $("a.scroll-to").on("click", function (event) {
    var $anchor = $(this);
    var href = $anchor.attr("href")
    href = href.substring(href.lastIndexOf("#"))
    console.log(href);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(href).offset().top - 50,
        },
        700
      );
    event.preventDefault();
  });

  $(".site-testimonial-item").on("mouseenter", function () {
    $(".site-testimonial-item").addClass("inactive");
    $(this).removeClass("inactive").addClass("active");
  });
  $(".site-testimonial-item").on("mouseleave", function () {
    $(".site-testimonial-item").removeClass("inactive");
    $(".site-testimonial-item").removeClass("active");
  });
});

$(window).on("scroll", function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $(".site-navigation").addClass("nav-bg");
  } else {
    $(".site-navigation").removeClass("nav-bg");
  }
});
