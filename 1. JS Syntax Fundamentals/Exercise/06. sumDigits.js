function solve(number) {
    const numberString = number.toString();
    let sum = 0;

    for (let i = 0; i<numberString.length; i++) {
        sum += Number(numberString[i]);
    }

    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);