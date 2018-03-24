var rect = require("./rect");

function solveRect(l,b){
    console.log(" l= "+l+" b= "+b);
    
    if (l <= 0 || b <=0){
        console.log("rect dimensions should be grater than zero");
    }
    else {
        console.log("The area of the rect is "+rect.area(l,b));
        console.log("The parimeter of the rect is "+rect.parimeter(l,b));
    }
}

solveRect(2,4);
solveRect(0,5);