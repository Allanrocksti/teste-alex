placar1 = 0;
placar2 = 0;

mudarPlacar(placar1, placar2)
setTempoJogo("inicio")

function gol1() {
    placar1++;
    mudarPlacar(placar1, placar2)

    showAnimation();
}

function gol2() {
    placar2++;
    mudarPlacar(placar1, placar2)
    showAnimation();
}