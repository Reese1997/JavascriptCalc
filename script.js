let sum = "";

function addtoSum(operator) {
  sum = sum + operator;
  document.getElementById("output").innerText = sum;
}

function evaluateSum() {
  document.getElementById("output").innerText = eval(sum);
}

function clearSum(){
  sum = " ";
    document.getElementById("output").innerText = sum;
}