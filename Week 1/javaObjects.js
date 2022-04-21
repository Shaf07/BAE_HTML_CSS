let myCar = {
    brand: "Seat Leon",
    year: 2012,
    seats: 5,
}
let yourCar = {
    brand: "Fiat punto",
    year: 2013,
    seats: 4,
}
let nestedMyCar = {
    shafsCar : {
    brand: "Seat Leon",
    year: 2012,
    seats: 5,
    "My favourite car": "this one"
    }
}
console.log(myCar.year)
console.log(nestedMyCar.shafsCar.brand)
console.log(nestedMyCar.shafsCar)
console.log(nestedMyCar.shafsCar["My favourite car"])

//nestedMyCar.shafsCar.engine = "1.6 litre";
//console.log(nestedMyCar.shafsCar)
console.log(nestedMyCar.shafsCar)

let garage = [myCar, yourCar]

//enhanced loop
for (let car in garage){
    console.log(garage[car].year)
}

//JSON Array
let carJSON = {
    "formula1JSON": {
        "drivers": [{
            "name": "LeClerc",
            "team": "Ferrari",
            "average result": "2nd place"
        }, {
            "name": "Riccardo",
            "team": "Red Bull",
            "average result": "20th place"
        }
    ]}
}
console.log(carJSON)

let formula1 = JSON.stringify(carJSON) //stringify turns it all into strings 
console.log(formula1)

let age;

function inputAge(age){
    if (age >= 18 && age <= 65){
        console.log("true");
    }else{
        if (age < 18){
            console.log("too young")
        }else{
            console.log("too old")
        }
    }
}

const divideThingy = function(a, b){  //creates an anonymous function, its NOT a variable
    console.log(a / b)
}   

const divideArrow = (a, b) => console.log(a/b);

divideThingy(9,3);
divideArrow(15, 3);

