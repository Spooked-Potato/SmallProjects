const BLUE_CIRCLE = "1";
const BLUE_TRIANGLE = "2";
const RED_CIRCLE = "3";
const RED_TRIANGLE = "4";

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
      throw new Error(`invalid option: ${styledMarkValue}`);
  }
  return result;
}

function renderResult(result) {
  const container = document.getElementById("result");
  // agora aqui exibes o resultado. Se só for o valor, ent...

  console.log(container);
  container.innerHTML = result;
}

function changeResult() {
  const result = getResult();
  renderResult(result);
}

mark.addEventListener("change", changeResult);
style.addEventListener("change", changeResult);
