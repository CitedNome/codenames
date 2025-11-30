//masters.js

// seleziona l'intero documento x il fullscreen
var elem = document.documentElement;

// Colora le celle della scheda degli SPYMASTER
function getColors() {
    var all_cards_ids = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9", "cell10", "cell11", "cell12", "cell13", "cell14", "cell15", "cell16", "cell17", "cell18", "cell19", "cell20", "cell21", "cell22", "cell23", "cell24", "cell25"];
    for (let i = 0; i < 8; i++) {
        var rand = [Math.floor(Math.random()*all_cards_ids.length)]
        document.getElementById(all_cards_ids[rand]).style.backgroundColor = "rgb(0, 0, 175)"
        document.getElementById(all_cards_ids[rand]).style.backgroundImage = "url('imgs/blue_sym.svg')"
        all_cards_ids.splice(rand, 1)
    }
    for (let i = 0; i < 8; i++) {
        var rand = [Math.floor(Math.random()*all_cards_ids.length)]
        document.getElementById(all_cards_ids[rand]).style.backgroundColor = "rgb(175, 0, 0)"
        document.getElementById(all_cards_ids[rand]).style.backgroundImage = "url('imgs/red_sym.svg')"

        all_cards_ids.splice(rand, 1)
    }
    for (let i = 0; i < 8; i++) {
        var rand = [Math.floor(Math.random()*all_cards_ids.length)]
        document.getElementById(all_cards_ids[rand]).style.backgroundColor = "var(--wheat-bg)"
        all_cards_ids.splice(rand, 1)
    }    
    document.getElementById(all_cards_ids[0]).style.backgroundColor = "rgb(50, 50, 50)"
    document.getElementById(all_cards_ids[0]).style.backgroundImage = "url('imgs/x_sym.svg')"
}

function triggerCell(cellId) {
    var cell = document.getElementById("cell" + cellId);
    if (cell.style.filter == ""){
        return cell.style.filter = "blur(1px) grayscale(70%)", cell.style.backgroundSize = "30%"
    }
    else {
        return cell.style.filter = "", cell.style.backgroundSize = "";
    }
}

function fullRefresh() {
    if (confirm("Eseguire il reset completo? Tutti i progressi della partita andranno persi!")) {
        var cells = document.getElementsByClassName("cell");
        for (let i = 0; i < 25; i++) {
            let cell = cells[i];
            cell.style.filter = ""
            cell.style.backgroundImage = ""
            cell.style.backgroundSize = ""
        }
        getColors()
    }
    else {
        return
    }
}

// Attiva e disattiva il fullscreen
function fullscreenTrigger() {
    if (document.fullscreenElement) {
        return document.exitFullscreen();
    }
    else {
        if (elem.requestFullscreen) {
        elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { // x safari (apple schifo)
        elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // x internet explorer (ancora + schifo)
        elem.msRequestFullscreen();
        }
    }
}

getColors()