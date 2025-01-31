const mainContainer = document.querySelector("#root");

const reactElement = {
  type: "input",
  props: {
    type: "text",
    placeholder: "Search",
  },
  Children: "",
};

function reactRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children;
  for (const prop in reactElement.props) {
    if (prop === "Children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const customRender = (reactRender, mainContainer);
