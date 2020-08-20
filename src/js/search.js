(function(window, document) {
  "use strict";

  const search = e => {
    const results = window.searchIndex.search(e.target.value, { expand: true });

    const resEl = document.getElementById("searchResults");
    resEl.innerHTML = "";
    if (results && results.length > 0) {
      results.map(r => {
        const { id, title, author } = r.doc;
        const el = document.createElement("li");
        resEl.appendChild(el);

        const h5 = document.createElement("h5");
        el.appendChild(h5);

        const a = document.createElement("a");
        a.setAttribute("href", id);
        a.textContent = title;
        h5.appendChild(a);

        const p = document.createElement("p");
        p.textContent = author;
        el.appendChild(p);
      });
    }
  };

  fetch("/search-index.json").then(response =>
    response.json().then(rawIndex => {
      window.searchIndex = elasticlunr.Index.load(rawIndex);
      document.getElementById("searchField").addEventListener("input", search);
    })
  );
})(window, document);
