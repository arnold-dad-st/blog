function createHomeLayout() {
  const container = UI.createElement("div", { class: "container-root" }, [
    UI.createElement(
      "header",
      {
        class: "header",
      },
      UI.createElement("a", { href: "index.html" }, "Log In")
    ),
    UI.createElement("main", { class: "main-section" }, [
      UI.createElement("sidebar", { class: "sidebar" }, "nav"),
      UI.createElement("div", { class: "section" }, [
        UI.createElement("section", { class: "box" }, "section"),
        UI.createElement("section", { class: "box" }, "section"),
        createFooter(),
      ]),
    ]),
  ]);

  UI.render(container, document.querySelector("body"));
}

function createFooter() {
  return UI.createElement("section", { class: "footer" }, Date().toString());
}

setInterval(() => {
  if (document.querySelector("div.section")) {
    document
      .querySelector("div.section")
      .removeChild(document.querySelector("section.footer"));
  }
  UI.render(createFooter(), document.querySelector("div.section"));
}, 1000);

createHomeLayout();
