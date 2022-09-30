function appendElement(target, elementName, content, id) {
  let element = document.createElement(elementName);
  if (content) element.innerText = content;
  if (id) element.id = id;
  target.appendChild(element);
}

function loadStructure() {
  let data = JSON.parse(this.responseText);
  data.elements.forEach((elementJSON) => {
    appendElement(app, elementJSON.tag, elementJSON.content, elementJSON.id);
  });
}

function build() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", loadStructure);
  req.open("GET", "http://localhost:5500/public/json/structure.json");
  req.send();
}
