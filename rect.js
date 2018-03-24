module.exports = (x,y,callback) => {
    
    if (x <= 0 || y <=0){
        setTimeout(() => callback(new Error("rect dimensions should be grater than zero"),null) ,
                   2000);
        
    }
    else {
        setTimeout(() => callback(null,{
        
            parimeter: () => (2*(x+y)),
            area: () => (x*y)
        
        }) ,
                   2000);
    }
};

