$(
  (function (a) {
    a(".venobox").venobox();
    var e = a(window);
    var g = a("html, body");
    if (a(".totop").length) {
      var h = 150,
        f = function () {
          var i = a(window).scrollTop();
          if (i > h) {
            a(".totop").addClass("show");
          } else {
            a(".totop").removeClass("show");
          }
        };
      f();
      e.on("scroll", function () {
        f();
        if (e.scrollTop()) {
          a("#mainHeader").addClass("stiky");
        } else {
          a("#mainHeader").removeClass("stiky");
        }
      });
      a(".totop").on("click", function (i) {
        i.preventDefault();
        a("html,body").animate({ scrollTop: 0 }, 700);
      });
    }
    jQuery(window).on("load", function () {
      var i = a(".site-preloader");
      i.fadeOut(500);
    });
    var c = a(".serviceSlider");
    c.owlCarousel({
      loop: true,
      margin: 30,
      dots: true,
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        650: { items: 2 },
        768: { items: 2 },
        991: { items: 2 },
        1200: { items: 3 },
        1920: { items: 3 },
      },
    });
    var d = a(".testiminal-carousel");
    d.owlCarousel({
      loop: true,
      margin: 30,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        650: { items: 1 },
        768: { items: 1 },
        991: { items: 1 },
        1200: { items: 1 },
        1920: { items: 1 },
      },
    });
    var b = a("#tesitmonial_right_item li");
    d.on("changed.owl.carousel", function (i) {
      var k = i.item.index + 0 - i.relatedTarget._clones.length / 2,
        j = i.item.count;
      (k > j || 0 == k) && (k = j - (k % j)), k--;
      var l = a("#tesitmonial_right_item li:nth(" + k + ")");
      l.addClass("active").siblings().removeClass("active");
    }),
      b.on("click", function () {
        d.trigger("to.owl.carousel", a(this).data("owl-item"));
      });
  })(jQuery)
);
