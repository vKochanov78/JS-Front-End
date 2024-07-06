function solve(text, word) {
    let wordLength = word.length;
    let result = text.replace(word, '*'.repeat(wordLength));
    console.log(result);
}

solve("A small sentence with some words", "small");
solve("Find the hidden word", "hidden");