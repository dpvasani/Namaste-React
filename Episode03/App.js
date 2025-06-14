import React from "react";
import ReactDOM from "react-dom";

// 🧠 Auto-detect root API (React 17 vs 18)
let rootRender;
const rootElement = document.getElementById("root");

try {
  // If React 18: use createRoot
  const { createRoot } = require("react-dom/client");
  const root = createRoot(rootElement);
  rootRender = root.render.bind(root);
} catch (e) {
  // If React 17: fallback to render
  rootRender = (component) => ReactDOM.render(component, rootElement);
}

/* ------------------------------------------------------------------
 🧱 1. Basic Element Creation (Single h1)
------------------------------------------------------------------- */
const heading = React.createElement("h1", {}, "🌟 Hello World from React.createElement");

/* ------------------------------------------------------------------
 🧱 2. Nested Elements
 <div id="parent">
   <div id="child">
     <h1>...</h1>
   </div>
 </div>
------------------------------------------------------------------- */
const child = React.createElement("div", { id: "child" }, heading);
const nestedParent = React.createElement("div", { id: "parent" }, child);

/* ------------------------------------------------------------------
 🧱 3. Sibling Elements
 <div id="siblings">
   <h1>...</h1>
   <h2>...</h2>
 </div>
------------------------------------------------------------------- */
const siblingOne = React.createElement("h1", {}, "Sibling 1 🧑‍🤝‍🧑");
const siblingTwo = React.createElement("h2", {}, "Sibling 2 👭");
const siblingsParent = React.createElement("div", { id: "siblings" }, siblingOne, siblingTwo);

/* ------------------------------------------------------------------
 🧱 4. Array of Elements
 <div id="array-parent">
   <h1>...</h1>
   <h2>...</h2>
   <p>...</p>
 </div>
------------------------------------------------------------------- */
const siblingsArray = [
  React.createElement("h1", {}, "👨‍👧 I'm sibling 1"),
  React.createElement("h2", {}, "👩‍👧‍👧 I'm sibling 2"),
  React.createElement("p", {}, "📘 I'm sibling 3")
];
const arrayParent = React.createElement("div", { id: "array-parent" }, siblingsArray);

/* ------------------------------------------------------------------
 🧱 5. Replace Content on Button Click
------------------------------------------------------------------- */
const button = document.createElement("button");
button.innerText = "Click to Replace Content";
button.style.marginTop = "20px";
document.body.appendChild(button);

button.addEventListener("click", () => {
  const clickedElement = React.createElement(
    "div",
    { id: "on-click" },
    React.createElement("h1", {}, "🎯 Replaced on Button Click!")
  );
  rootRender(clickedElement);
});

/* ------------------------------------------------------------------
 🧱 6. Replace After Delay (setTimeout)
------------------------------------------------------------------- */
setTimeout(() => {
  const timeoutElement = React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "⏱️ Replaced after 3s delay!")
  );
  rootRender(timeoutElement);
}, 3000);

/* ------------------------------------------------------------------
 ✅ Initial Render (can swap to any variation above)
------------------------------------------------------------------- */
rootRender(nestedParent); // Swap with siblingsParent or arrayParent if needed

// 🧪 Debug Virtual DOM Element
console.log("🔍 Virtual DOM (heading):", heading);
