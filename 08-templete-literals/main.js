// needed variables
const name = "Raihan";
const age = 19;
const skill = "Web Development";
let html;

// without templete (ES5 pain in the neck)
html =
  "<ul><li>Name: " +
  name +
  " </li><li>Age: " +
  age +
  " </li><li>Skill: " +
  skill +
  " </li></ul>";

html =
  "<ul>" +
  "<li>Name: " +
  name +
  " </li>" +
  "<li>Age: " +
  age +
  " </li>" +
  "<li>Skill: " +
  skill +
  " </li>" +
  "</ul>";

// first funtion in js
function iknow() {
  return "I am familliear with may things";
}

// with templete ES6
html = ` 
      <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Skill: ${skill}</li>
        <li>${10 * 10}</li>
        <li>${iknow()}</li>
        <li>${age > 20 ? "you little late" : "You are right timing"}</li>
      </ul>
`;

document.body.innerHTML = html;
