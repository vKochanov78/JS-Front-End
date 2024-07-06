function solve(startNum, endNum) {
    let numberArray = [];
    let totalSum = 0;

    for (let i=startNum; i<=endNum; i++) {
        numberArray.push(i)
        totalSum += i
    }

    console.log(numberArray.join(' '));
    console.log(`Sum: ${totalSum}`);
}

solve(5, 10);
solve(0, 26);