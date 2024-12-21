let scrollButton = document.getElementById("scrollButton");

// Define scroll action
window.onscroll = function() {checkScrollToTop()};

// Check if the scroll to top button should be visible
function checkScrollToTop() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// Scroll to the top
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Sets the current language to either german or english
// src: https://stackoverflow.com/questions/7530401/how-to-localize-a-simple-html-website-page-in-my-case
function selectLanguage (language)
{
  let lang = ':lang(' + language + ')';
  let hide = '[lang]:not(' + lang + ')';
  document.querySelectorAll(hide).forEach(function (node) {
    node.style.display = 'none';
  });
  let show = '[lang]' + lang;
  document.querySelectorAll(show).forEach(function (node) {
    node.style.display = 'unset';
  });
}
