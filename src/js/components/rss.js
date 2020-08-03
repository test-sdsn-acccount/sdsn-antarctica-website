"use strict";
var RSS_URL = "https://www.unsdsn.org/feed/rss2";

fetch(RSS_URL).then(function (response) {
  return response.text();
}).then(function (str) {
  return new window.DOMParser().parseFromString(str, "text/xml");
}).then(function (data) {
  console.log(data);
  var items = data.querySelectorAll("item");
  var html = "";
  items.forEach(function (el) {
    html += "\n <article>\n<h2>\n  <a href=\"" + el.querySelector("link").innerHTML + "\" target=\"_blank\" rel=\"noopener\">\n    " + el.querySelector("title").innerHTML + "\n  </a>\n          </h2>\n        </article>\n      ";
  });
  document.body.insertAdjacentHTML("beforeend", html);
});