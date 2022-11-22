var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?"

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input) {
    return serverUrl + "?" + "text = " + input


}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server try again later")
}


function clickHandler() {
    // outputDiv.innerText = "translated: " + textInput.value;
    var inputText = textInput.value;


    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => outputDiv.innerText = json.contents.translated)
        .catch(errorHandler)

};



buttonTranslate.addEventListener("click", clickHandler())