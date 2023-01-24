document.getElementById("date").valueAsDate = new Date();

const element = document.getElementById("btn");

let pharse;
let form = document.querySelector(".form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let bananas = document.getElementById("name").value;
  let data = document.getElementById("date").value;
  let work = document.getElementById("work").value;
  let selected = document.querySelector('input[name="bolachas"]:checked').value;

  let array1 = document.getElementById("hobies").value.split(",");

  let hobbies = "";

  for (let i = 0; i < array1.length; i++) {
    hobbies += array1[i] + "<br>";
  }

  pharse =
    "hi there " +
    bananas +
    " you where born at " +
    data +
    " you work at " +
    work +
    " and your hobbies are " +
    hobbies +
    " you like cookies " +
    selected;

  sessionStorage.setItem("pharse", pharse);
  form.submit();
});
