document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".autocomplete");
  var instances = M.Autocomplete.init(elems, {
    data: {
      Apple: null,
      Microsoft: null,
      Google: "https://placehold.it/250x250",
      Tesla: null,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".chips");
  var instances = M.Chips.init(elems, {
    data: [
      { tag: "Apple" },
      { tag: "Microsoft" },
      { tag: "Tesla" },
      { tag: "Facebook" },
    ],
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".timepicker");
  var instances = M.Timepicker.init(elems);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
});

M.textareaAutoResize(document.querySelector("#textarea1"));

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("input#input_text").characterCounter();
});

document.addEventListener("DOMContentLoaded", function () {
  var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});

document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".tabs");
  var instance = M.Tabs.init(el);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    var instances = M.TapTarget.init(elems);
  });