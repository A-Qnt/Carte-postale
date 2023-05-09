// Changement du titre

let title = document.getElementById("myTitle")
let titleOnCard = document.getElementById("myTitleOnCard")

title.addEventListener("keyup", function () {
    titleOnCard.innerText = title.value
})

//Changement du message

let message = document.getElementById("myMessage")
let messageOnCard = document.getElementById("myMessageOnCard")

message.addEventListener("keyup", function () {
    messageOnCard.innerText = message.value
})

// Changement de photo

function changePictureForet() {
    let foret = document.getElementById("photo");
    foret.src = "/assets/img/foret.jpg"
}

function changePictureMer() {
    let mer = document.getElementById("photo");
    mer.src = "/assets/img/plage.jpg"
}

function changePictureMontagne() {
    let montagne = document.getElementById("photo");
    montagne.src = "/assets/img/montagne.jpg"
}

// Changement de Font
let arial = document.getElementById("arial")
let calibri = document.getElementById("calibri")
let roboto = document.getElementById("roboto")

arial.addEventListener("click", function () {
    document.getElementById("myTitleOnCard").style.fontFamily = "Arial, Helvetica, sans-serif"
    document.getElementById("myMessageOnCard").style.fontFamily = "Arial, Helvetica, sans-serif"
})

calibri.addEventListener("click", function () {
    document.getElementById("myTitleOnCard").style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif "
    document.getElementById("myMessageOnCard").style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif "
})

roboto.addEventListener("click", function () {
    document.getElementById("myTitleOnCard").style.fontFamily = "'Roboto', sans-serif"
    document.getElementById("myMessageOnCard").style.fontFamily = "'Roboto', sans-serif"
})

// Changement de couleur de police

let myTitleOnCard = document.getElementById("myTitleOnCard")
let myMessageOnCard = document.getElementById("myMessageOnCard")
let myColor = document.getElementById("myColor")

myColor.addEventListener("blur", function () {
    myTitleOnCard.style.color = myColor.value
    myMessageOnCard.style.color = myColor.value
})



// Changement de couleur de background

let bordercard = document.getElementById("bordercard")
let mybgColor = document.getElementById("mybgColor")

mybgColor.addEventListener("blur", function () {
    bordercard.style.backgroundColor = mybgColor.value
})


// Changement de style de font

let myStyle = document.getElementById("myStyle")

myStyle.addEventListener("change", function () {
    switch (myStyle.value) {
        case "italic":
            myTitleOnCard.classList.add("italic")
            myTitleOnCard.classList.remove("bold", "underline")
            myMessageOnCard.classList.add("italic")
            myMessageOnCard.classList.remove("bold", "underline")
            break;
        case "bold":
            myTitleOnCard.classList.add("bold")
            myTitleOnCard.classList.remove("italic", "underline")
            myMessageOnCard.classList.add("bold")
            myMessageOnCard.classList.remove("italic", "underline")
            break;
        case "underline":
            myTitleOnCard.classList.add("underline")
            myTitleOnCard.classList.remove("bold", "italic")
            myMessageOnCard.classList.add("underline")
            myMessageOnCard.classList.remove("bold", "italic")
            break;
        default:
            myTitleOnCard.classList.remove("italic", "bold", "underline")
            myMessageOnCard.classList.remove("italic", "bold", "underline")
    }
})

//  Print

document.querySelector("#myPrint").addEventListener("click", function () {
    window.print()
})

