let Quotes = [
    {
        quote: "\"Be yourself; everyone else is already taken.\"",
        author: "-Oscar Wilde",
        img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg'
    },
    {
        quote: "\"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.\"",
        author:"-Marilyn Monroe",
        img:'https://images.gr-assets.com/quotes/1511992603p8/8630.jpg'
    },
    {
        quote: "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"",
        author: "-Albert Einstein",
        img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg'
    },
    {
        quote: "\"So many books, so little time.\"",
        author: "-Frank Zappa",
        img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1696236573i/22302._UX200_CR0,0,200,200_.jpg'
    },
    {
        quote: "\"A room without books is like a body without a soul.\"",
        author: "-Marcus Tullius Cicero",
        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1197881416i/13755._UX200_CR0,47,200,200_.jpg'
    },
    {
        quote: "\"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\"",
        author:"-Bernard M. Baruch",
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1331977133i/5768330._UX200_CR0,30,200,200_.jpg"
    }

]


function generateQuotes(){
    var random = parseInt(Math.random() * Quotes.length);
    document.getElementById("Quote").innerHTML = Quotes[random].quote;
    document.getElementById("Author").innerHTML = Quotes[random].author;
    document.getElementById("image").src = Quotes[random].img;
}

window.onload = function() {
    document.getElementById("image").src = 'https://static.vecteezy.com/system/resources/previews/009/970/460/original/eps10-blue-quotation-mark-icon-isolated-on-white-background-double-quotes-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-ui-pictogram-and-mobile-application-vector.jpg';
}

