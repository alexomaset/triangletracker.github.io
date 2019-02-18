function tap() {
var sidea = document.getElementById("data1").value;
var sideb = document.getElementById("data2").value;
var sidec = document.getElementById("data3").value;
var sideA=parseInt(sideA);
var sideB=parseInt(sideB);
var sideC=parseInt(sideC);
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
