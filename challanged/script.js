document.getElementById("date").valueAsDate = new Date();

const element = document.getElementById("btn");

let pharse;

document.querySelector(".form").addEventListener("submit", function () {
  let bananas = document.getElementById("name").value;
  let data = document.getElementById("date").value;
  let work = document.getElementById("work").value;
  let fun = document.getElementById("hobbies").value;
  const selected = document.querySelector(
    'input[name="bolachas"]:checked'
  ).value;

  pharse =
    "hi there " +
    bananas +
    " you where born at " +
    data +
    " you work at " +
    work +
    " and your hobbies are " +
    fun +
    " you like cookies " +
    selected;

  sessionStorage.setItem("pharse", pharse);
});
