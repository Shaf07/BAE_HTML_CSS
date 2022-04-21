console.log("Hello world!")
let fName = "Aaron"
const VALUE = "unchangeable"
console.log(VALUE)
let myArray = [10, 12, 14, 9, 10, "Jungle"]
console.log(myArray[1])
const literalStuff = `My name is ${fName}.`
console.log(literalStuff)
let arrayOfNums = [10, 13, 14, 12, 9, 8]
arrayOfNums.sort((a,b)=>a-b);
console.log(arrayOfNums)



function findTarget(){
    let numSearch = window.prompt("enter number");
    for (let i = 0; i < arguments.length; i++){
        if (i == numSearch){
            console.log(arguments.indexOf(i));
        } 

    }
}
function findTargets(){
    let numSearch = window.prompt("enter number");
    if (arrayOfNums.includes(`${numSearch}`)){
            console.log(arrayOfNums.indexOf(`${numSearch}`));
        } 

    }


//findTargets(arrayOfNums)