'use strict'
const titleEl = document.getElementById("title-el");
const countEl = document.getElementById("count-el");
const addOneEl = document.getElementById("plusone-el");
const saveEl = document.getElementById("save-el")
const savedEl = document.getElementById("saved-el")
const historyEl = document.getElementById("history-el")

let count = 0;
let increment = () => {
    count++;
    countEl.textContent = count;
}

console.log("dj");

let saveCount = () => {
    savedEl.textContent = count;
    historyEl.append(count + " --- ");
    countEl.textContent = 0;
    count = 0;
}

addOneEl.addEventListener("click", increment)
saveEl.addEventListener("click", saveCount)
