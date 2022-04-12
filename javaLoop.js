console.log("Hey")
let nums = 100;
let numLow = true;

function lessThan(){
    while (numLow) {
    console.log("A");
    nums++;

    if (nums > 200) {
        numLow = false;
    }
    }
    console.log("number found");
    //////
    let a = 100;
    let multipleOfTwo = false;
    let complete = a <= 200;
}

function lessThanFor(){
    simpleNum = 100;
    simpleNumLow = true;
    for (let i = 100; i <= 200; i++){
        if (simpleNum >200){
            break;
        }else{
            console.log("A")
            simpleNum++
        }
    }
}

function multipletwo(){
    while (complete) {

    if (a%2 == 0){
        console.log("-");
        multipleOfTwo = true;
        a++;
    }else{
        console.log("*")
        a++;
    }
    if (a>200){
        break;
    }
    }
console.log("number got it");
}

function printTen(){
    let oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (i = 0; i <= oneToTen.length; i++){
        console.log(i, i, i, i, i, i, i, i, i, i)
    }
}

function printTenSimple(){
    for (let i = 0; i < 10; i++){
        for (let j = 0; j <= 10; j++){
            console.log(j)
        }
    }
}

function challenge(){
    let A = window.prompt("enter number");
    if (A > 2000){
        console.log("A")
        if (A > 6000){
            console.log("C");
        } else{
            console.log("B");
            if (A > 4000){
                console.log("D")
            }else{
                console.log("E")
            }
        }
    }else{
        console.log("1");
        if (A > 100){
            console.log("3")
            if (A > 600){
                console.log("5")
            }else{
                console.log("4")
                if (A>500){
                    console.log("6")
                }else{
                    console.log("7")
                }
            }
        }else{
            console.log("2")
        }
     }
 }
function challengeSimple(){

    let A = window.prompt("enter number");
    if (A > 2000 && A < 6000){
        console.log("A");
        if (A < 4000){
            console.log("E")
        }else{
            console.log("D")
        }
    }else if (A < 6000){
        console.log("A", "C")
    }else if (A < 100 && A < 600){
            console.log("1", "3");
            if (A < 4000){
                console.log("E")
            }else{
                console.log("D")
            }
        }else if (A < 6000){
            console.log("A", "C")
    
        }else if{
        console.log("1");
        if (A > 100){
            console.log("3")
            if (A > 600){
                console.log("5")
            }else{
                console.log("4")
                if (A>500){
                    console.log("6")
                }else{
                    console.log("7")
                }
            }
        }else{
            console.log("2")
        }
     }
 }
function blackjack(){
    let cardOne = Math.floor(Math.random()* (21 - 1) + 1);
    let cardTwo = Math.floor(Math.random()* (21 - 1) + 1);
    let result = cardOne + cardTwo;
    console.log("Your cards are " +`${cardOne}`+" and "+ `${cardTwo}`+ " and total " + `${result}`)
    if (result <= 21){
        let highCard = Math.max(cardOne, cardTwo)
        console.log("Your highest card is " + `${highCard}`)
    }else{
        console.log("You went over 21")
    }
}

function genNumbers(){
    let threeNumbers = Array.from({ length: 3}, () => Math.floor(Math.random()*4));
    console.log(threeNumbers)
    for (let i = 0; i <= threeNumbers.length; i++){
        console.log(i);
    }
}
