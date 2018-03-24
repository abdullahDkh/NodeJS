var rect = require("./rect");

function solveRect(l,b){
    console.log(" l= "+l+" b= "+b);
    
    rect(l,b,(err,rect) => {
       
        if(err){
            console.log("the error: "+err.message);
        }
        else {
            console.log("the rect area is "+rect.area());
        }
    });
    console.log("call after rect");
}

solveRect(2,4);
solveRect(0,5);