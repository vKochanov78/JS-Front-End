function solve(days) {
    if (days % 4 === 0 && days % 100 !== 0) {
        console.log('yes');
    } else if (days % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

solve(1984);
solve(2003);
solve(4);