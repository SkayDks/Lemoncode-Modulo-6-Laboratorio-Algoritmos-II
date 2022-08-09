/** ----- Encriptacion Descriptacion -----*/

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function replaceLetter(index, text, changeLetter) {
  return text.slice(0, index) + changeLetter + text.slice(index + 1);
}

function encryptDecrypt(text, filter) {
  let resultText = text;
  let textA = filter === "encrypt" ? plainAlphabet : encryptedAlphabet;
  let textB = filter === "decrypt" ? plainAlphabet : encryptedAlphabet;

  for (var i = 0; i < textA.length; i++) {
    let found = text.indexOf(textA[i]);
    while (found !== -1) {
      resultText = replaceLetter(found, resultText, textB[i]);
      console.log(resultText);
      found = text.indexOf(textA[i], found + 1);
    }
  }
  return resultText;
}

function handleResolution(e) {
  var decripter = document.querySelector(".textDecripter > textarea");
  var encripter = document.querySelector(".textEncripter > textarea");

  if (e.target.id === "encrypt")
    decripter.value = encryptDecrypt(encripter.value, e.target.id);
  else encripter.value = encryptDecrypt(decripter.value, e.target.id);
}

document.querySelector("#encrypt").addEventListener("click", handleResolution);
document.querySelector("#decrypt").addEventListener("click", handleResolution);

/** ----- Generador Aleatorio ----- */

var randomPick = (n, min, max) => {
    let arrayNumber = [];
    let result =[];
    let RandomNumber;

    for(var i = min; i <= max ; i++){
        arrayNumber.push(i);
    }
    for(var i = 0 ; i < n ; i++){
        RandomNumber = Math.floor( Math.random()*(arrayNumber.length-1));
        result.push(arrayNumber.splice(RandomNumber,1)[0])
    }

    return result;
};


console.log("randomPick(6, 1, 49):", randomPick(6, 1, 49))
console.log("randomPick(15, 1, 15):", randomPick(15, 1, 15))
console.log("randomPick(5, 50, 100):", randomPick(5, 50, 100))
console.log("randomPick(1, 1, 12):", randomPick(1, 1, 12))
console.log("randomPick(1, 1, 6):", randomPick(1, 1, 6))