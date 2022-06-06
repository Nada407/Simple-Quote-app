var  quote = [
    "“Be yourself; everyone else is already taken“ .-osacar wide",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe”",
    "“So many books, so little time.”― Frank Zappa",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe”",
    "“So many books, so little time.”― Frank Zappa",
    "“If you tell the truth, you don't have to remember anything.”― Mark Twain",
];
function getQuote(){
    var randomNumber =Math.floor(Math.random()*quote.length);
    document.getElementById("output").innerHTML=quote[randomNumber]

}