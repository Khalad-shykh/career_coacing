$(document).ready(function () {
    const headerTop = $(".header-top");
    const navbar = $("#header .navbar");
    const sections = $("section"); // Adjust selector if necessary

    function updateScrollMargin() {
        let navbarHeight = navbar.outerHeight(true); // Get the navbar height
        let headerTopHeight = headerTop.is(":visible") ? headerTop.outerHeight(true) : 0;
        let scrollMarginTop = navbarHeight + headerTopHeight;

        sections.each(function () {
            $(this).css("scroll-margin-top", scrollMarginTop + "px");
        });
    }

    // Run the function on scroll and resize
    $(window).on("scroll resize", function () {
        if (window.matchMedia("only screen and (min-width: 1200px)").matches) {
            if ($(window).scrollTop() >= headerTop.outerHeight(true) + 120) {
                headerTop.hide().fadeOut(300);
                navbar.addClass("fixed-navigation");
            } else {
                headerTop.show().fadeIn(300);
                navbar.removeClass("fixed-navigation");
            }
        } else if ($(window).scrollTop() >= navbar.outerHeight(true) + 120) {
            navbar.addClass("fixed-navigation");
        } else {
            navbar.removeClass("fixed-navigation");
        }

        updateScrollMargin(); // Adjust scroll margin dynamically
    });

    // Initial setup
    updateScrollMargin();
});
