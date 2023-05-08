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

// Changeent de Font

function changeFontArial() {
    document.getElementById("myTitleOnCard").style.fontFamily = "Arial, Helvetica, sans-serif"
    document.getElementById("myMessageOnCard").style.fontFamily = "Arial, Helvetica, sans-serif"
}

function changeFontCalibri() {
    document.getElementById("myTitleOnCard").style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif "
    document.getElementById("myMessageOnCard").style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif "

}

function changeFontRoboto() {
    document.getElementById("myTitleOnCard").style.fontFamily = "'Roboto', sans-serif"
    document.getElementById("myMessageOnCard").style.fontFamily = "'Roboto', sans-serif"
}

// Changement de couleur de police

let myTitleOnCard = document.getElementById("myTitleOnCard")
let myMessageOnCard = document.getElementById("myMessageOnCard")
let myColor = document.getElementById("myColor")

function changeColor() {
    myTitleOnCard.style.color = myColor.value
    myMessageOnCard.style.color = myColor.value
}

// Changement de couleur de background

let bordercard = document.getElementById("bordercard")
let mybgColor = document.getElementById("mybgColor")

function changebgColor() {
    bordercard.style.backgroundColor = mybgColor.value

}

// Changement de style de font

let myStyle = document.getElementById("myStyle")

function changeStyleNormal() {
    switch (myStyle.value) {
        case "italic":
            myTitleOnCard.style.textDecoration = "none"
            myMessageOnCard.style.textDecoration = "none"
            myTitleOnCard.style.fontWeight = "normal"
            myMessageOnCard.style.fontWeight = "normal"
            myTitleOnCard.style.fontStyle = "italic"
            myMessageOnCard.style.fontStyle = "italic"
            break;
        case "bold":
            myTitleOnCard.style.textDecoration = "none"
            myMessageOnCard.style.textDecoration = "none"
            myTitleOnCard.style.fontWeight = "bold"
            myMessageOnCard.style.fontWeight = "bold"
            myTitleOnCard.style.fontStyle = "normal"
            myMessageOnCard.style.fontStyle = "normal"
            break;
        case "underline":
            myTitleOnCard.style.textDecoration = "underline"
            myMessageOnCard.style.textDecoration = "underline"
            myTitleOnCard.style.fontWeight = "normal"
            myMessageOnCard.style.fontWeight = "normal"
            myTitleOnCard.style.fontStyle = "normal"
            myMessageOnCard.style.fontStyle = "normal"
            break;
        default:
            myTitleOnCard.style.textDecoration = "none"
            myMessageOnCard.style.textDecoration = "none"
            myTitleOnCard.style.fontWeight = "normal"
            myMessageOnCard.style.fontWeight = "normal"
            myTitleOnCard.style.fontStyle = "normal"
            myMessageOnCard.style.fontStyle = "normal"
    }
}


//  Print

function printCard() {
    
    window.print()
}