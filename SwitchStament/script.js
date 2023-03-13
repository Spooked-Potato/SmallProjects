const BLUE_CIRCLE = "1";
const BLUE_TRIANGLE = "2";
const RED_CIRCLE = "3";
const RED_TRIANGLE = "4";

function dropdownChange() {
  const checkDropDown = document.querySelector("#numberPeople").value;
  let buttonChange = document.getElementById("getQuote");
  buttonChange.innerText = "Book Now";

  // checkDropDown.addEventListener("change", function () {
  //   if (checkDropDown.changed == true) {
  //     console.log("hi this working on change");
  //   }
  //   if (checkDropDown.changed == true) {
  //     console.log("this not working");
  //   }
  // });

  if (checkDropDown == "idk") {
    console.log("this is working");
    buttonChange.innerText = "Get Quote";
  } else {
    function getResult() {
      const mark = document.getElementById("mark").value;
      const style = document.getElementById("style").value;
      const combinedOptions = `${mark} ${style}`;

      let result = "";
      switch (combinedOptions) {
        case "blue circle":
          console.log("bananas");
          result = BLUE_CIRCLE;
          break;
        case "blue triangle":
          result = BLUE_TRIANGLE;
          break;
        case "red circle":
          result = RED_CIRCLE;
          break;
        case "red triangle":
          result = RED_TRIANGLE;
          break;
        default:
          buttonChange.innerText = "Get Quote";
      }
      return result;
    }
    function renderResult(result) {
      const container = document.getElementById("result");
      container.innerHTML = result;
    }

    function changeResult() {
      const result = getResult();
      renderResult(result);
    }

    mark.addEventListener("change", changeResult);
    style.addEventListener("change", changeResult);
  }
}

dropdownChange();
