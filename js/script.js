function out(){
var sideA = parseInt(document.getElementById("data1").value);
var sideB = parseInt(document.getElementById("data2").value);
var sideC = parseInt(document.getElementById("data3").value);
if(sideA + sideB <= sideC || sideB + sideC <= sideA || sideC + sideA <= sideB){
  alert ("The values cannot form a Triangle");
} else {
  if(sideA == sideB && sideB == sideC && sideA == sideC){
    alert("equilateral triangle");
  } else if((sideA===sideB) && (sideB===sideC) && (sideA===sideC)){
    alert("Isosceles triangle");
  } else {
    alert("Scalene");
  }
}
}
