function appendElement(target, elementName, content, id) {
  let element = document.createElement(elementName);
  element.innerText = content;
  element.id = id;
  target.appendChild(element);
}

function loadStructure() {
  let data = JSON.parse(this.responseText);
  console.log(data);
}

function build() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", loadStructure);
  req.open("GET", "http://localhost:5500/public/json/structure.json");
  req.send();
}
