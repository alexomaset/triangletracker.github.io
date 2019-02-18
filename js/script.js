var triangleTracker = function(side1, side2, side3) {
	if(((side1 + side2) >= side3) && ((side2 + side3) >= side1) && ((side3 + side1) && side2)) { 
        return typeOfTriangle(side1, side2, side3); 

var typeOfTriangle = function(side1, side2, side3) {
	if((side1 === side2) && (side2 === side3)) {
		return "equilateral triangle"
	} else if((sideA === sideB) || (sideC === side) || (side2 === side3)) {
		return "isoceles triangle"
	} else {
		return "scalene triangle"
	}
};
$("input.formbtn").click(function(event) {
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var show = triangle(sideA, sideB, sideC);
};
