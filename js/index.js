function inputData(num) {
  let input = document.getElementById("result");
  input.value += num;
}

function handleOutput() {
  let input = document.getElementById("result");

  total = eval(input.value);
  input.value = total;
}

function handleClear() {
  let input = document.getElementById("result");
  input.value = "";
}
