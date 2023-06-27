import "@/styles/main.scss";

import "jquery";
import SimpleBar from "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from "resize-observer-polyfill";
window.ResizeObserver = ResizeObserver;

(function ($) {
  $(() => {
    console.log(`Jquery version ${$().jquery}`);
    new SimpleBar(document.querySelector("#leftside-menu-container"));
    $(document).on("click", ".nav-menu-toggle", function (e) {
      e.preventDefault();
      const menuId = $(this).data("menu");
      $("html").attr("data-sidenav-size", function (index, attr) {
        return attr == "condensed" ? "default" : "condensed";
      });
    });
  });
})(jQuery);
