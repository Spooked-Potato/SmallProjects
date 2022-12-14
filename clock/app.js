console.log("hello world!");
const buttonminus = document.getElementById("minus");
const buttonplus = document.getElementById("plus");
let count = 0;

buttonminus.onclick = function () {
  count = count - 1;
  console.log(count);
  document.querySelector(".square").value = count;
};

buttonplus.onclick = function () {
  count = count + 1;
  console.log(count);
  document.querySelector(".square").value = count;
};
