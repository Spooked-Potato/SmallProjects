document.getElementById("date").valueAsDate = new Date();

const element = document.getElementById("btn");

let pharse;

let form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const bananas = urlParams.get("username");
  console.log("username");

  const data = urlParams.get("datatime");
  const work = urlParams.get("work");

  let selected = document.querySelector('input[name="bolachas"]:checked');
  let array1 = urlParams.get("hobies").split(",");

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
    " and your hobbies are ";
  hobbies + " you like cookies " + selected;

  document.getElementById("result").textContent = pharse;

  console.log(pharse);

  form.submit();
  event.preventDefault();
});
