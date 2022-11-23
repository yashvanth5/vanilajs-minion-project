var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(text) {
    // return serverUrl + "?" + "text = " + text;
    return `${serverUrl}?text=${text}`;

}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server try again later")
}


function clickEventHandler() {
    var inputText = textInput.value;
    fetch(getTranslation(inputText))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated;
       outputDiv.innerText = outputText;
        } )

};






btnTranslate.addEventListener("click", clickEventHandler);