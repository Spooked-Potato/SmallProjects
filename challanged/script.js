document.getElementById("date").valueAsDate = new Date();

const element = document.getElementById("btn");

let pharse;

document.querySelector(".form").addEventListener("submit", function () {
  let bananas = document.getElementById("name").value;
  let data = document.getElementById("date").value;
  let work = document.getElementById("work").value;
  let selected = document.querySelector('input[name="bolachas"]:checked').value;
  let hobbies = document.getElementById("hobies").value.split(" ");

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
});
