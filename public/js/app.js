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

function fetchData(URL, onLoad) {
  const req = new XMLHttpRequest();
  req.addEventListener("load", onLoad);
  req.open("GET", URL);
  req.send();
}

function loadStructure() {
  let data = JSON.parse(this.responseText);
  data.elements.forEach((elementJSON) => {
    appendElement(app, elementJSON.tag, elementJSON.content, elementJSON.id);
  });

  loadCMSButtonElement.onclick = () => {
    fetchData("http://localhost:5500/public/json/cars.json", loadCars);
  };
}

function build() {
  fetchData("http://localhost:5500/public/json/structure.json", loadStructure);
}
