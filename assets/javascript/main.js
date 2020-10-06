let roll = document.querySelector('#roll')
let diceNumber= document.querySelector('#diceNumber')
let totalRolls=document.querySelector('#total')
let showAllRolls=document.querySelector('#dieRolls')
let results=document.querySelector('#results')
let reset=document.querySelector('#reset')
let dieRolls = []

roll.addEventListener('click', function() {
    // console.log("Roll Button Click");
    let x = Number(diceNumber.value)
    let index = 0
    totalRolls.innerHTML = '';
    dieRolls = []

    while (index <= x) {
        // console.log(x[index]);
        let diceRollValue = Math.floor(Math.random()*6)+1;
        console.log(diceRollValue);
        dieRolls.push(diceRollValue)
        index++;
    }
    console.log(dieRolls);
    let reducer = (accumulator, current) => accumulator + current;
    totalRolls.innerHTML = "Total: " + dieRolls.reduce(reducer);
})


showAllRolls.addEventListener('click', function () {
    // console.log("Show All Rolls Click");
    let index =0;
    results.innerHTML = '';

    while (index < dieRolls.length) {
        console.log(dieRolls[index]);
        results.innerHTML += '<li>You rolled: ' + (index+1) + ' Time it was a ' + dieRolls[index] + '</li>';
    index++;
    }
})

reset.addEventListener('click', function () {
    results.innerHTML = ''
    totalRolls.innerHTML = "Total: "
    dieRolls = []
    diceNumber.value = ''
})

// function writeWordsToPage(longWord, shortestWord) {
//     // longestWordTag.innerHTML= "The longest word: " + longWord;
// }

// writeWordsToPage("This", longestWrod, shortestWord);