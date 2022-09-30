function appendElement(target, elementName, content, id) {
  let element = document.createElement(elementName);
  element.innerText = content;
  element.id = id;
  target.appendChild(element);
}

function build() {}
