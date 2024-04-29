let input = document.getElementById("result");

function inputData(num) {
  input.value += num;
}

function handleOutput() {
  total = eval(input.value);
  input.value = total;
}

function handleClear() {
  input.value = "";
}
