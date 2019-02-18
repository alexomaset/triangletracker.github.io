var triangle = function tap() {
var sideA=parseInt(document.getElementById("data1").value);
var sideB=parseInt(document.getElementById("data2").value);
var sideC=parseInt(document.getElementById("data3").value);
console.log(sideA)
console.log(sideB)
console.log(sideC)
if(sideA+sideB<sideC&&sideA+sideC<sideB&&sideC+sideB<sideA) {
  alert("NO triangle");
} else if(sideA===sideB&&sideB===sideC) {
  alert("Equilateral Triangle");
} else if(sideA===sideB||sideB===sideC||sideA===sideC) {
  alert("Isosceles Triangle");
} else if(sideA!==sideB&&sideB!==sideC&&sideC!==sideA&&sideA+sideB>sideC&&sideA+sideC>sideB&&sideC+sideB>sideA) {
  alert("Scalene Triangle");
} else {
  alert("NO Triangle");
}
}
