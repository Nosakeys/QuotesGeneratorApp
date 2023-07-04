document.title = "Quotes App"

let para = document.querySelector("#para");
let btn = document.getElementById("btn")
quotes = ["Nobody knows tomorrow", "Give and it shall be given you", "Bless the Lord oh my Soul"]

btn.addEventListener("click", ()=> {
para.innerHTML = quotes[getRandomQuotes()]
})


function getRandomQuotes () {
    return Math.floor(Math.random()* quotes.length)
}