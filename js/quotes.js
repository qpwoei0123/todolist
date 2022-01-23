const quotes = [
{
    quote: "이잉~기모링",
    author: "괴물쥐",
},
{
    quote: "더 배워와",
    author: "이재석",
}
];

const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")

randnum =  Math.floor(Math.random() * quotes.length)

//quote.innerText = quotes[randnum].quote 
//author.innerText = quotes[randnum].author

