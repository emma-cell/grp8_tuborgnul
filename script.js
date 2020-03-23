//split scroll funktion start
let isLeftSideScrolling;
let container_LHasScrollSnap = false;
const container_L = document.querySelector(".container_left");
const container_R = document.querySelector(".container_right");

// Sæt højre scroll i bund
container_R.scrollTop = container_R.scrollHeight - container_R.clientHeight - container_R.scrollTop;



container_L.addEventListener("scroll", listenL);
// kontrollere venstre del af skærmen
function listenL() {
    if (isLeftSideScrolling) {
        container_R.scrollTop = this.scrollHeight - this.clientHeight - this.scrollTop;


        // hvis venstre side bliver scrollet tilføjes scroll snap på venstre side
        if (container_LHasScrollSnap == true) {
            container_L.classList.add("scroll_snap_type_y_mandatory");
            container_R.classList.remove("scroll_snap_type_y_mandatory");
            container_LHasScrollSnap = false;
        }
    }
    isLeftSideScrolling = true;
}

container_R.addEventListener("scroll", listenR);
// kontrollere højre del af skærmen
function listenR() {


    if (!isLeftSideScrolling) {
        container_L.scrollTop = this.scrollHeight - this.clientHeight - this.scrollTop;

        // hvis venstre side ikke bliver scrollet tilføjes scroll snap på højre side
        if (container_LHasScrollSnap == false) {

            container_R.classList.add("scroll_snap_type_y_mandatory");
            container_L.classList.remove("scroll_snap_type_y_mandatory");
            container_LHasScrollSnap = true;
        }

    }
    isLeftSideScrolling = false;
}

//split scroll funktion slut

// funktion til at skifte tekst
let text = document.querySelector("#nultext");

setTimeout(textSkift1, 2000);

function textSkift1() {
    console.log("textskift1")
    text.textContent = "Konsekvenser";
    setTimeout(textSkift2, 2000);
}

function textSkift2() {
    text.textContent = "Fortrydelser";
    setTimeout(textSkift3, 2000);
}

function textSkift3() {
    text.textContent = "Drunk texts";
    setTimeout(textSkift4, 2000);
}

function textSkift4() {
    text.textContent = "Hovedpine";
    setTimeout(textSkift5, 2000);
}

function textSkift5() {
    text.textContent = "Tømmermænd";
    setTimeout(textSkift1, 2000);
}

// MOBILE

let text2 = document.querySelector("#nultextmobile");

setTimeout(text2Skift1, 2000);

function text2Skift1() {
    console.log("textskift1")
    text2.textContent = "Konsekvenser";
    setTimeout(text2Skift2, 2000);
}

function text2Skift2() {
    text2.textContent = "Fortrydelser";
    setTimeout(text2Skift3, 2000);
}

function text2Skift3() {
    text2.textContent = "Drunk texts";
    setTimeout(text2Skift4, 2000);
}

function text2Skift4() {
    text2.textContent = "Hovedpine";
    setTimeout(text2Skift5, 2000);
}

function text2Skift5() {
    text2.textContent = "Tømmermænd";
    setTimeout(text2Skift1, 2000);
}
