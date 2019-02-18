var triangleTracker = function(sideA, sideB, sideC) {
    return sideA, sideB, sideC;
    }
    var sideA=parseInt(prompt("input side A"));
    var sideB=parseInt(prompt("input side B"));
    var sideC=parseInt(prompt("input side C"));
     if(sideA+sideB<=sideC&&sideA+sideC<=SideB&&sideC+sideB<=sideA) {
     alert("NO triangle");
     } else if(sideA===sideB&&sideB===sideC) {
     alert("Equilateral Triangle")
     } else if(sideA===sideB&&sideB!==sideA||sideB===sideC&&sideC!==sideA) {
     alert("Isosceles Triangle")
     } else if(sideA!==sideB&&sideB!==sideC&&sideC!==sideA&&sideA+sideB>sideC&&sideA+sideC>sideB&&sideC+sideB>sideA) {
     alert("Scalene Triangle")
     } else {
     alert("NO Triangle")
     }