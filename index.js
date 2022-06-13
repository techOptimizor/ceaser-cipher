let encrypted = "";
let decrypted = ""
let alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
let data = alphabet.split(' ');
let on = true




let buttonEl = document.getElementById("buttonId")
let secondIn = document.getElementById("input2");
let buttonSe = document.getElementById("button2")
let buttonTH = document.getElementById("buttonTh")
let decrypt = document.getElementById("text2")


buttonEl.addEventListener("click", function () {
    let inputData = document.getElementById("wahala").value;
    for (let i = 0; i < inputData.length; i++) {
        if (inputData[i] === " ") {
            encrypted += "&"
        } else {
            let num = data.indexOf(inputData[i])
            encrypted += data[(num + 5) % data.length]
        }
    }
    secondIn.textContent = encrypted
    encrypted = ""

})

buttonSe.onclick = function () {
    secondIn.select();
    document.execCommand("copy");
}

if (on === true) {
    decrypt.onclick = function () {
        decrypt.value = ""
        on = false

    }
} else {
    on = false
}

buttonTH.addEventListener("click", function () {
    let outputData = document.getElementById("text2").value;

    for (let i = 0; i < outputData.length; i++) {
        if (outputData[i] === "&") {
            decrypted += " "
        } else {
            let num = data.indexOf(outputData[i])
            let sum = num - 5
            if (sum === -1) {
                sum = 25
                decrypted += data[sum]
            }
            else if (sum === -2) {
                sum = 24
                decrypted += data[sum]
            }
            else if (sum === -3) {
                sum = 23
                decrypted += data[sum]
            }
            else if (sum === -4) {
                sum = 22
                decrypted += data[sum]
            } else {
                decrypted += data[sum]
            }

        }
    }

    decrypt.value = decrypted
    decrypted = "";

})


