// Change style of top container on scroll
window.onscroll = function() {
    myFunction();
};
function myFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myTop").classList.add("w3-card-4");
        document.getElementById("myIntro").classList.add("w3-show-inline-block");
        document.getElementById("myTop").classList.add("title");
    } else {
        document.getElementById("myIntro").classList.remove("w3-show-inline-block");
        document.getElementById("myTop").classList.remove("w3-card-4");
        document.getElementById("myTop").classList.remove("title");
    }
}

//Aeroplane tabs
function toRot() {
    document.getElementById("milTab").className = "contMil0";
}
function toComm() {
    document.getElementById("milTab").className = "contMil1";
}