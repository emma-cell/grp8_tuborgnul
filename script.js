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

let circle1 = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");

circle1.addEventListener("click", changeImg1);
circle2.addEventListener("click", changeImg2);

function changeImg1() {
    circle1.classList.remove("circleempty");
    circle1.classList.add("circlefull");
    circle2.classList.remove("circlefull");
    circle2.classList.add("circleempty");
    document.querySelector(".beerimg").classList.add("hide");
    document.querySelector(".beerimg2").classList.remove("hide");
}

function changeImg2() {
    circle2.classList.remove("circleempty");
    circle2.classList.add("circlefull");
    circle1.classList.remove("circlefull");
    circle1.classList.add("circleempty");
    document.querySelector(".beerimg2").classList.add("hide");
    document.querySelector(".beerimg").classList.remove("hide");
}

let daaseWord = document.querySelector(".daaseword");
let flaskeWord = document.querySelector(".flaskeword");


circle2.addEventListener("mouseover", daaseWordAppear)
circle1.addEventListener("mouseover", flaskeWordAppear)

circle2.addEventListener("mouseout", daaseWordDisappear)
circle1.addEventListener("mouseout", flaskeWordDisappear)

function daaseWordAppear() {
    console.log("daasewordappear")
    daaseWord.classList.add("fadein");
    daaseWord.classList.remove("fadeout");
}

function flaskeWordAppear() {
    console.log("flaskewordappear")
    flaskeWord.classList.add("fadein");
    flaskeWord.classList.remove("fadeout");
}


function daaseWordDisappear() {
    console.log("daaseworddisappear")
    daaseWord.classList.remove("fadein");
    daaseWord.classList.add("fadeout");
}

function flaskeWordDisappear() {
    console.log("flaskeworddisappear")

    flaskeWord.classList.remove("fadein");
    flaskeWord.classList.add("fadeout");
}


//------------------ QUIZ ----------------


let sporgsmal = document.querySelector("#sporgsmal");
let knap = document.querySelector("#knap");
let point = 0;
let svar = document.querySelector(".quizsvar");

knap.addEventListener("click", knapKlik);


function knapKlik() {
    sporgsmal.textContent = "2. Hvad hedder Obama til fornavn?";
    knap.removeEventListener("click", knapKlik);
    let svar = document.querySelector("#inputfelt").value;


    if (svar == "0" || svar == "0,0" || svar == "0%" || svar == "0.0") {
        console.log("Du gættede rigtigt!");
        svar.textContent = "Rigtigt!";
        point++;
    } else {
        console.log("Du gættede forkert!")
        svar.textContent = "Forkert!";
    }

    knap.addEventListener("click", knapKlik2);

}

function knapKlik2() {
    sporgsmal.textContent = "3. Er det okay at drikke en alkoholfri øl?";
    knap.removeEventListener("click", knapKlik2);
    let svar = document.querySelector("#inputfelt").value;


    if (svar == "Barack" || svar == "barack") {
        console.log("Du gættede rigtigt!");
        svar.textContent = "Rigtigt!";
        point++;
    } else {
        console.log("Du gættede forkert!")
        svar.textContent = "Forkert!";
    }

    knap.addEventListener("click", knapKlik3);

}

function knapKlik3() {
    sporgsmal.textContent = "4. Smager en Tuborg Nul præcis som andre øl?";
    knap.removeEventListener("click", knapKlik3);
    let svar = document.querySelector("#inputfelt").value;


    if (svar == "Ja" || svar == "ja") {
        console.log("Du gættede rigtigt!");
        svar.textContent = "Rigtigt!";
        point++;
    } else {
        console.log("Du gættede forkert!")
        svar.textContent = "Forkert!";
    }

    knap.addEventListener("click", knapKlik4);

}

function knapKlik4() {
    sporgsmal.textContent = "5. Hvad hedder Hitler til fornavn?";
    knap.removeEventListener("click", knapKlik4);
    let svar = document.querySelector("#inputfelt").value;


    if (svar == "Ja" || svar == "ja") {
        console.log("Du gættede rigtigt!");
        svar.textContent = "Rigtigt!";
        point++;
    } else {
        console.log("Du gættede forkert!")
        svar.textContent = "Forkert!";
    }

    knap.addEventListener("click", knapKlik5);

}

function knapKlik5() {
    knap.removeEventListener("click", knapKlik5);
    let svar = document.querySelector("#inputfelt").value;

    if (svar == "Adolf" || svar == "adolf") {
        console.log("Du gættede rigtigt!");
        point++;
        svar.textContent = "Rigtigt!";
    } else {
        console.log("Du gættede forkert!")
        svar.textContent = "Forkert!";
    }

    spilSlut();
}

function spilSlut() {
    console.log("Tilykke du fik", point, "point!");
    svar.textContent = "Tilykke du fik", point, "point!";
}
