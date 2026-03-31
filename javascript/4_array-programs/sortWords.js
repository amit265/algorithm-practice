// 10. Sort Words in Alphabetical Order


const words = [
    "JavaScript",
    "Program",
    "to",
    "Sort",
    "Words",
    "in",
    "Alphabetical",
    "Order",
];

const sortedWords = words.sort();

console.log(sortedWords);



// localeCompare()

const sortedWordsUsinglocaleCompare = words.sort((a, b) => a.localeCompare(b))


console.log(sortedWordsUsinglocaleCompare)



// Implementing bubble sort function


function bubbleSort(wordsArray){
    const length = wordsArray.length;
    for(let i = 0; i< length - 1; i++){
        for(let j = 0; j < length - i - 1; j++){
            if(wordsArray[j].localeCompare(wordsArray[j + 1], undefined, {sensitivity: "base"}) > 0){
                // swapping word in the array

                const temp = wordsArray[j];
                wordsArray[j] = wordsArray[j + 1];
                wordsArray[j + 1] = temp;
            }
        }
    }
    return wordsArray;
}

const sortedWordsUsingBubbleSort = bubbleSort(words);
console.log(sortedWordsUsingBubbleSort)