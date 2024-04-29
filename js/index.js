let input = document.getElementById("result");
let p = document.querySelector(".oddOrEven");

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

function handleOdd() {
  if (input.value == "") {
    p.textContent = "Input Field is blank";
    p.style.color = "rgb(218, 55, 55)";
  } else if (+input.value % 2 != 0) {
    p.textContent = "Odd";
    p.style.color = "dodgerblue";
    input.value = "";
  } else {
    p.textContent = "It is not Odd";
    p.style.color = "rgb(218, 55, 55)";
    input.textContent = "";
  }
}

function handleEven() {
  // alert(typeof input.value);
  if (input.value == "") {
    p.textContent = "Input Field is blank";
    p.style.color = "rgb(218, 55, 55)";
  } else if (+input.value % 2 == 0) {
    p.textContent = "Even";
    p.style.color = "dodgerblue";
    input.value = "";
  } else {
    p.textContent = "It is not even";
    p.style.color = "rgb(218, 55, 55)";
    input.value = "";
  }
}
