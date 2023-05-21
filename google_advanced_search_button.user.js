// ==UserScript==
// @name        Google Advanced Search Button
// @namespace   Violentmonkey Scripts
// @match       *://www.google.*/*
// @grant       none
// @licence     MIT
// @version     1.0
// @author      slayernominee
// @description add an button for the google advanced search in the google home search page instead of the random search button
// ==/UserScript==

random_search_button = document.getElementsByClassName("RNmpXc")[1];

random_search_button.value = "Advanced Search";
random_search_button.setAttribute("aria-label", "Advanced Search");
random_search_button.attributes.removeNamedItem("jsaction");
random_search_button.attributes.removeNamedItem("data-ved");
random_search_button.attributes.removeNamedItem("name");
random_search_button.addEventListener('click',function (evt) {
    evt.preventDefault();

    window.location.href = "https://www.google.com/advanced_search";
  });
