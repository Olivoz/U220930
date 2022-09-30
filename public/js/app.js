function appendElement(target, elementName, content, id) {
  let element = document.createElement(elementName);
  if (content) element.innerText = content;
  if (id) element.id = id;
  target.appendChild(element);
}

function loadCars() {
  let data = JSON.parse(this.responseText);
  data.cars.forEach((car) => {
    appendElement(carListElement, "li", car);
  });
}

function loadStructure() {
  let data = JSON.parse(this.responseText);
  data.elements.forEach((elementJSON) => {
    appendElement(app, elementJSON.tag, elementJSON.content, elementJSON.id);
  });

  loadCMSButtonElement.onclick = () => {
    const req = new XMLHttpRequest();
    req.addEventListener("load", loadCars);
    req.open("GET", "http://localhost:5500/public/json/cars.json");
    req.send();
  };
}

function build() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", loadStructure);
  req.open("GET", "http://localhost:5500/public/json/structure.json");
  req.send();
}
