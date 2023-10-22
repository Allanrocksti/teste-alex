function mudarPlacar(gol1, gol2) {
    document.querySelector("#placar").innerHTML = `${gol1} x ${gol2}`;
}

function setTempoJogo(tempo) {
    document.querySelector("#tempo").innerHTML = tempo;
}

function showAnimation() {
    setTimeout(() => {
        document.querySelector("#animation").innerHTML = "\\o/";
    }, 1000)

    setTimeout(() => {
        document.querySelector("#animation").innerHTML = "|o|";
    }, 2000)

    setTimeout(() => {
        document.querySelector("#animation").innerHTML = "\\o/";
    }, 3000)

    setTimeout(() => {
        document.querySelector("#animation").innerHTML = "";
    }, 4000)
}