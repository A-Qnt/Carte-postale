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
