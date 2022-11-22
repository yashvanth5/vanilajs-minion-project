var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?"

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverUrl + "?" + "text = " + text

}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server try again later")
}


function clickEventHandler() {

    var inputText = textInput.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => txtOutput.innerText = json.contents.translated)
        .catch(errorHandler)
       
    };



buttonTranslate.addEventListener("click", clickEventHandler);