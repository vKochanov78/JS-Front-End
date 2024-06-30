function solve(data) {
    
    let inputType = typeof(data);

    if (inputType === "number") {
        console.log((Math.pow(data, 2) * Math.PI).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

solve(5);
solve('name');