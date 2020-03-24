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
let result = document.querySelector(".quizsvar");

knap.addEventListener("click", knapKlik);


function knapKlik() {
    sporgsmal.textContent = "2. Hvad hedder Obama til fornavn?";
    knap.removeEventListener("click", knapKlik);
    let svar = document.querySelector("#inputfelt").value;


    if (svar == "0" || svar == "0,0" || svar == "0%" || svar == "0.0") {
        console.log("Du gættede rigtigt!");
        result.textContent = "Rigtigt!";
        point++;
    } else {
        console.log("Du gættede forkert!")
        result.textContent = "Forkert!";
    }

    knap.addEventListener("click", knapKlik2);

}

function knapKlik2() {
    sporgsmal.textContent = "3. Er det okay at drikke en alkoholfri øl?";
    knap.removeEventListener("click", knapKlik2);
    let svar = document.querySelector("#inputfelt").value;


    if (svar == "Barack" || svar == "barack") {
        console.log("Du gættede rigtigt!");
        result.textContent = "Rigtigt!";
        point++;
    } else {
        console.log("Du gættede forkert!")
        result.textContent = "Forkert!";
    }

    knap.addEventListener("click", knapKlik3);

}

function knapKlik3() {
    sporgsmal.textContent = "4. Smager en Tuborg Nul præcis som andre øl?";
    knap.removeEventListener("click", knapKlik3);
    let svar = document.querySelector("#inputfelt").value;


    if (svar == "Ja" || svar == "ja") {
        console.log("Du gættede rigtigt!");
        result.textContent = "Rigtigt!";
        point++;
    } else {
        console.log("Du gættede forkert!")
        result.textContent = "Forkert!";
    }

    knap.addEventListener("click", knapKlik4);

}

function knapKlik4() {
    sporgsmal.textContent = "5. Hvad hedder Hitler til fornavn?";
    knap.removeEventListener("click", knapKlik4);
    let svar = document.querySelector("#inputfelt").value;


    if (svar == "Ja" || svar == "ja") {
        console.log("Du gættede rigtigt!");
        result.textContent = "Rigtigt!";
        point++;
    } else {
        console.log("Du gættede forkert!")
        result.textContent = "Forkert!";
    }

    knap.addEventListener("click", knapKlik5);

}

function knapKlik5() {
    knap.removeEventListener("click", knapKlik5);
    let svar = document.querySelector("#inputfelt").value;

    if (svar == "Adolf" || svar == "adolf") {
        console.log("Du gættede rigtigt!");
        point++;
        result.textContent = "Rigtigt!";
    } else {
        console.log("Du gættede forkert!")
        result.textContent = "Forkert!";
    }

    spilSlut();
}

function spilSlut() {
    console.log("Tilykke du fik", point, "point!");
    result.textContent = "Du fik " + point + " point!";
}

//------------------ QUIZ MOBILE ----------------


let sporgsmalMobile = document.querySelector("#sporgsmalmobile");
let knapMobile = document.querySelector("#knapmobile");
let pointMobile = 0;
let resultMobile = document.querySelector(".quizsvarmobile");

knapMobile.addEventListener("click", knapKlikM);


function knapKlikM() {
    sporgsmalMobile.textContent = "2. Hvad hedder Obama til fornavn?";
    knapMobile.removeEventListener("click", knapKlikM);
    let svarM = document.querySelector("#inputfeltmobile").value;


    if (svarM == "0" || svarM == "0,0" || svarM == "0%" || svarM == "0.0") {
        console.log("Du gættede rigtigt!");
        resultMobile.textContent = "Rigtigt!";
        pointMobile++;
    } else {
        console.log("Du gættede forkert!")
        resultMobile.textContent = "Forkert!";
    }

    knapMobile.addEventListener("click", knapKlik2M);

}

function knapKlik2M() {
    sporgsmalMobile.textContent = "3. Er det okay at drikke en alkoholfri øl?";
    knapMobile.removeEventListener("click", knapKlik2M);
    let svarM = document.querySelector("#inputfeltmobile").value;


    if (svarM == "Barack" || svarM == "barack") {
        console.log("Du gættede rigtigt!");
        resultMobile.textContent = "Rigtigt!";
        pointMobile++;
    } else {
        console.log("Du gættede forkert!")
        resultMobile.textContent = "Forkert!";
    }

    knapMobile.addEventListener("click", knapKlik3M);

}

function knapKlik3M() {
    sporgsmalMobile.textContent = "4. Smager en Tuborg Nul præcis som andre øl?";
    knapMobile.removeEventListener("click", knapKlik3M);
    let svarM = document.querySelector("#inputfeltmobile").value;


    if (svarM == "Ja" || svarM == "ja") {
        console.log("Du gættede rigtigt!");
        resultMobile.textContent = "Rigtigt!";
        pointMobile++;
    } else {
        console.log("Du gættede forkert!")
        resultMobile.textContent = "Forkert!";
    }

    knapMobile.addEventListener("click", knapKlik4M);

}

function knapKlik4M() {
    sporgsmalMobile.textContent = "5. Hvad hedder Hitler til fornavn?";
    knapMobile.removeEventListener("click", knapKlik4M);
    let svarM = document.querySelector("#inputfeltmobile").value;


    if (svarM == "Ja" || svarM == "ja") {
        console.log("Du gættede rigtigt!");
        resultMobile.textContent = "Rigtigt!";
        pointMobile++;
    } else {
        console.log("Du gættede forkert!")
        resultMobile.textContent = "Forkert!";
    }

    knapMobile.addEventListener("click", knapKlik5M);

}

function knapKlik5M() {
    knapMobile.removeEventListener("click", knapKlik5M);
    let svarM = document.querySelector("#inputfeltmobile").value;

    if (svarM == "Adolf" || svarM == "adolf") {
        console.log("Du gættede rigtigt!");
        pointMobile++;
        resultMobile.textContent = "Rigtigt!";
    } else {
        console.log("Du gættede forkert!")
        resultMobile.textContent = "Forkert!";
    }

    spilSlutM();
}

function spilSlutM() {
    console.log("Tilykke du fik", pointMobile, "point!");
    resultMobile.textContent = "Du fik " + pointMobile + " point!";
}



//// KONKURRENCE





let kodeKnap = document.querySelector(".kodebutton")

let kodeKnap2 = document.querySelector(".kodebuttonmobile")

let kodeMessage = document.querySelector(".kodemessage")

let kodeMessage2 = document.querySelector(".kodemessagemobile")

kodeKnap.addEventListener("click", checkKode);
kodeKnap2.addEventListener("click", checkKode2);

function checkKode() {
    console.log("checkKode")

    let kodeSvar = document.querySelector(".inputkode").value;

    if (kodeSvar == "laura" || kodeSvar == "markus" || kodeSvar == "carl" || kodeSvar == "emma" || kodeSvar == "bertram") {
        kodeMessage.textContent = "Tillykke!!!!! Indtast din email herunder til at få din præmie!"
        document.querySelector(".inputemail").classList.remove("hide");
    } else {
        kodeMessage.textContent = "Ingen præmie på denne kode din taber :("
        document.querySelector(".inputemail").classList.add("hide");
    }

}

function checkKode2() {
    console.log("checkKode2")

    let kodeSvar2 = document.querySelector(".inputkodemobile").value;

    if (kodeSvar2 == "laura" || kodeSvar2 == "markus" || kodeSvar2 == "carl" || kodeSvar2 == "emma" || kodeSvar2 == "bertram") {
        kodeMessage2.textContent = "Tillykke!!!!! Indtast din email herunder til at få din præmie!"
        document.querySelector(".inputemailmobile").classList.remove("hide");
    } else {
        kodeMessage2.textContent = "Ingen præmie på denne kode din taber :("
        document.querySelector(".inputemailmobile").classList.add("hide");
    }

}


// burgermenu

const btn = document.querySelector("#toggle");
const overlay = document.querySelector("#overlay")

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
    btn.classList.toggle("active");
    overlay.classList.toggle("open")
}
