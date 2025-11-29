var elem = document.documentElement;
//tutte le parole
var selected_words = []

// Funzione che popola le cards con parole casuali pescate da una lista predefinita (sarebbe carino implementare parole personalizzate e selettore che determina in quale percentuale appaiono rispetto a quelle di default)
function getWords() {
    /* var all_words = ["Faccia", "Scienziato", "Stadio", "Erba", "Vestito", "Aria", "Olio", "Spiaggia", "Coda", "Accordo", "Negozio", "Battuta", "Gioco", "Conduttore", "Turno", "Moneta", "Avvocato", "Caccia", "Infermiera", "Mazzo", "Legno", "Calcio", "Zoccolo", "Bomba", "Antartide", "India", "Scuola", "Nano", "Carota", "Ape", "Fuoco", "Storia", "Morte", "Corso", "Ragno", "Berlino", "Cella", "Danza", "Patata", "Roulette", "Pistola", "Viola", "Zecca", "Guanto", "Francia", "Miele", "Africa", "Drago", "Sacco", "Fortuna", "Rospo", "Guerra", "Milionario", "Aquila", "Incontro", "Acqua", "Supereroe", "Hotel", "Notte", "Pane", "Modello", "Ketchup", "Folletto", "Casinò", "Messico", "Grattacielo", "Indice", "Malattia", "Peso", "Occhio", "Stagno", "Ospedale", "Grado", "Limousine", "Radice", "Ambulanza", "Vento", "Bronzo", "Leone", "Metro", "Batteria", "Piovra", "Fantasia", "Coppa", "Elicottero", "Spina", "Laser", "Stivale", "Mela", "Monete", "Vita", "Corte", "Gelato", "Opera", "Furgone", "Limone", "Angelo", "Capitale", "Botte", "Verme", "Gigante", "Tempio", "Letto", "Rivoluzione", "Muro", "Borsa", "Torre", "Tubo", "Lettera", "Asse", "Cravatta", "Scheda", "Diamante", "Posizione", "Croce", "Mutande", "Rete", "Vita", "Punto", "Baffo", "Passo", "Pecora", "Piatto", "Guardia", "Buco", "Zucchero", "Campana", "New York", "Forza", "Rombo", "Chiave", "Piega", "Motore", "Porta", "Onda", "Foro", "Flusso", "Marmo", "Testa", "Pranzo", "Polo", "Caffè", "Centro", "Colombo", "Parco", "Capo", "Pasta", "Piano", "Braccio", "Amo", "Codice", "Profilo", "Cerchio", "Treno", "Campo", "Topo", "Canna", "Film", "Napoli", "Freddo", "Australia", "Bar", "Bermuda", "Capelli", "Tokyo", "Resistenza", "Egitto", "Piastra", "Londra", "Elefante", "Zucca", "Pipa", "Mosca", "Ombelico", "Svizzera", "Bottone", "Dante", "Tesoro", "Hollywood", "Albero", "Grecia", "Uovo", "Roma", "Vuoto", "Himalaya", "Radio", "Ninja", "Energia", "Spaghetto", "Porto", "Pinocchio", "Cornice", "Germania", "Cimice", "Stato", "Assassino", "America", "Flauto", "Atlantide", "Spada", "Italia", "Kiwi", "Banco", "Lingua", "Ago", "Anno", "Cuore", "Salsa", "Canale", "Mossa", "Posta", "Calice", "Bocca", "Disco", "Mano", "Viaggio", "Etichetta", "Diavolo", "Neve", "Aereo", "Linea", "Natale", "Avorio", "Cassa", "Corno", "Parte", "Base", "Sangue", "Anello", "Nota", "Stella", "Pera", "Coperta", "Chiodo", "Cambio", "Seno", "Casa", "Giro", "Soldato", "Blocco", "Fila", "Torcia", "Petto", "Schermo", "Sale", "Partita", "Catena", "Corda", "Area", "Piramide", "Suono", "Ornitorinco", "Lira", "Triangolo", "Oro", "Pollice", "Yeti", "Errore", "Cane", "Sedia", "Spazio", "Riga", "Isola", "Tempo", "Maiale", "Squadra", "Scarpa", "Tiro", "Corona", "Vetro", "Gas", "Regina", "Fiera", "Spirito", "Teatro", "Polizia", "Magia", "Fetta", "Giorno", "Nave", "Pollo", "Re", "Arco", "Palla", "Carta", "Forchetta", "Quadro", "Pilota", "Tazza", "Coltello", "Gru", "Dente", "Organo", "Piede", "Banda", "Bottiglia", "Figura", "Insegnante", "Mercurio", "Manto", "Cotone", "Fusto", "Cuoco", "Scala", "Foresta", "Ciclo", "Coniglio", "Ruota", "Banca", "Macchina", "Noce", "Trama", "Orso", "Libro", "Gatto", "Pirata", "Torta", "Saturno", "Lupo", "Genio", "Fattura", "Pinguino", "Verde", "Frusta", "Squalo", "Jet", "Contrabbandiere", "Alieno", "Scorpione", "Ambasciata", "Verso", "Tromba", "Pesca", "Pupazzo di neve", "Alpi", "Principessa", "Scampo", "Dinosauro", "Venezia", "Cioccolato", "Pechino", "Missile", "Riso", "Concerto", "Europa", "Spia", "Bacino", "Ladro", "Tasso", "Chiesa", "Busta", "Sommozzatore", "Giove", "Guarnizione", "Cavallo", "Ramo", "Cintura", "Pianta", "Canguro", "Mina", "Pesce", "Cera", "Paracadute", "Falange", "Telescopio", "Ritmo", "Strega", "Collo", "Olimpo", "Colpo", "Ponte", "Massa", "Ghiaccio", "Mora", "Satellite", "Tavola", "Lampo", "Imposta", "Centauro", "Miglio", "Arresto", "Unicorno", "Volo", "Ombra", "Balena", "Vino", "Luna", "Dado", "Robot", "Agente", "Microscopio", "Colonna", "Veleno", "Cavaliere", "Raggio", "Rosa", "Becchino", "Terra", "Dottore"];*/
    var all_words = window.all_words.slice()
    var cards = document.getElementsByClassName("cardText");
	for (var card in cards){
	    var rand = [Math.floor(Math.random()*all_words.length)];
        cards[card].innerHTML = all_words[rand];
        selected_words.push(all_words[rand])
        all_words.splice(rand, 1)
    }
}

/* Maggiori info sulla funzione getColors() riportata a seguire:
Funzione per colorare randomicamente il colore di sfondo delle carte per assegnarle alle squadre e identificare le neutre e la nera.
8 blu + 8 rosse + 8 verde (neutro) + 1 nera (SÌ LO SO CHE SAREBBERO 7 PER UNA SQUADRA E 8 PER L'ALTRA))
al momento colora gli sfondi delle carte (questo mi sminchia completamente tutto il sistema di assegnazione del colore quando si svelano), quindi non è implementato da nessuna parte.
Probabilmente lo riutilizzerò nella pagina a parte per generare le schedine per gli spymaster.
*/

function getColors() {
    var all_cards_ids = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20", "card21", "card22", "card23", "card24", "card25"];
    for (let i = 0; i < 8; i++) {
        var rand = [Math.floor(Math.random()*all_cards_ids.length)]
        document.getElementById(all_cards_ids[rand]).classList.add("blue")
        all_cards_ids.splice(rand, 1)
    }
    for (let i = 0; i < 8; i++) {
        var rand = [Math.floor(Math.random()*all_cards_ids.length)]
        document.getElementById(all_cards_ids[rand]).classList.add("red")
        all_cards_ids.splice(rand, 1)
    }
    for (let i = 0; i < 8; i++) {
        var rand = [Math.floor(Math.random()*all_cards_ids.length)]
        document.getElementById(all_cards_ids[rand]).classList.add("green")
        all_cards_ids.splice(rand, 1)
    }    
    document.getElementById(all_cards_ids[0]).classList.add("black")
}

function revealOld(card_id) {
	var card = document.getElementById("card"+card_id);
    if (card.style.backgroundColor == "rgb(199, 199, 199)") {
        return card.style.backgroundColor = "blue";
    }
    else if (card.style.backgroundColor == "blue") {
        return card.style.backgroundColor = "red";
    }
    else if (card.style.backgroundColor == "red") {
        return card.style.backgroundColor = "rgb(225, 205, 110)"
    }
    else if (card.style.backgroundColor == "rgb(225, 205, 110)") {
        return card.style.backgroundColor = "rgb(199, 199, 199)"
    }
}

/* BREAK-DOWN dei colori utilizzati per cambiare l'aspetto della carta coperta nella funzione reveal() a seguire:

Ogni volta che si clicca la carta il colore cambia seguendo questa scaletta:
rgb(218, 165, 32) (gold) = card non ancora coperte (default, valore di partenza)
rgb(0, 255, 0) (green) = card bianche (di nessuna squadra)
rgb(255, 0, 0) (red) = card squadra rosse
rgb(0, 0, 255) (blue) = card squadra blu
rgb(0, 0, 0) (black) = card assassino
Dopo il nero la carta torna gold, facendo sparire la copertura e ricominciando il ciclo */
function reveal(card_id) {
	var card = document.getElementById("cardCover"+card_id);
    var style = getComputedStyle(card)
    if (style.backgroundColor == "rgb(218, 165, 32)") {
        return card.style.display = "block", card.style.backgroundColor = "rgb(0, 255, 0)", card.style.backgroundImage = `url('imgs/white${ranBin()}.webp')`;
    }
    else if (style.backgroundColor == "rgb(0, 255, 0)") {
        return card.style.backgroundColor = "rgb(255, 0, 0)", card.style.backgroundImage = `url('imgs/red${ranBin()}.webp')`;
    }
    else if (style.backgroundColor == "rgb(255, 0, 0)") {
        return card.style.backgroundColor = "rgb(0, 0, 255)", card.style.backgroundImage = `url('imgs/blue${ranBin()}.webp')`;
    }
    else if (style.backgroundColor == "rgb(0, 0, 255)") {
        return card.style.backgroundColor = "rgb(0, 0, 0)", card.style.backgroundImage = "url('imgs/black.webp')";
    }
    else if (card.style.backgroundColor == "rgb(0, 0, 0)") {
        return card.style.display = "none", card.style.backgroundColor = "rgb(218, 165, 32)", card.style.backgroundImage = "";
    }
}

function ranBin() {
    return Math.round(Math.random())
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

function fullRefresh() {
    if (confirm("Eseguire il reset completo? Tutti i progressi della partita andranno persi!")) {
        var covers = document.getElementsByClassName("cardCover");
        for (let i = 0; i < 25; i++) {
            let cover = covers[i];
            cover.style.display = "none"
            cover.style.backgroundImage = ""
            cover.style.backgroundColor = "rgb(218, 165, 32)"
        }
        getWords()
    }
    else {
        return
    }
}

getWords()