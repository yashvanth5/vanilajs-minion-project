// var btnTranslate = document.querySelector("#btn-translate");
// var textInput = document.querySelector("#txt-input");
// var outputDiv = document.querySelector("#output");

// var serverUrl = "https://api.funtranslations.com/translate/minion.json"

// function getTranslation(text) {
//     // return serverUrl + "?" + "text = " + text;
//     return `${serverUrl}?text=${text}`;

// }

// function errorHandler(error) {
//     console.log("error occured", error)
//     alert("something wrong with server try again later")
// }


// function clickEventHandler() {
//     var inputText = textInput.value;
//     fetch(getTranslation(inputText))
//     .then(response => response.json())
//     .then(json => {
//         var outputText = json.contents.translated;
//        outputDiv.innerText = outputText;
//         } )

// };

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(text) {
    // return serverUrl + "?" + "text = " + text;
    return `${serverUrl}?text=${encodeURIComponent(text)}`; // added `encodeURIComponent()` to properly encode the text
}

function errorHandler(error) {
    console.log("error occurred", error); // corrected spelling of "occurred"
    alert("something went wrong with the server. Please try again later."); // added more details to alert message
}

function clickEventHandler() {
    var inputText = textInput.value;
    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var outputText = json.contents.translated;
            outputDiv.innerText = outputText;
        })
        .catch(errorHandler); // added error handling
}

btnTranslate.addEventListener("click", clickEventHandler);







btnTranslate.addEventListener("click", clickEventHandler);