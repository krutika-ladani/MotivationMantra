
function loadQuote()
{
    document.getElementById("copy").innerText = "Copy" ;
    document.getElementById("next").innerText = " loading..." ;
    var para = document.getElementById("quoteLine");
    var auth = document.getElementById("author");
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(result =>{
            para.innerHTML = '"'+result.content+'"';
            auth.innerHTML = '- '+result.author;
            document.getElementById("next").innerText = " Next Quote " ;
        });
}

function copyQuote()
{
    copyText = document.getElementById("quoteLine").innerText + "   " + document.getElementById("author").innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById("copy").innerText = "Copied" ;
}

function listen()
{
    let utterance = new SpeechSynthesisUtterance(document.getElementById("quoteLine").innerText);
    speechSynthesis.speak(utterance);
}

