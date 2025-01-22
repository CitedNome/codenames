//tutte le parole
var selected_words = []

// Inserisce parole casuali pescate da una lista predefinita
function getWords() {
    var all_words = ["Faccia", "Scienziato", "Stadio", "Erba", "Vestito", "Aria", "Olio", "Spiaggia", "Coda", "Accordo", "Negozio", "Battuta", "Gioco", "Conduttore", "Turno", "Moneta", "Avvocato", "Caccia", "Infermiera", "Mazzo", "Legno", "Calcio", "Zoccolo", "Bomba", "Antartide", "India", "Scuola", "Nano", "Carota", "Ape", "Fuoco", "Storia", "Morte", "Corso", "Ragno", "Berlino", "Cella", "Danza", "Patata", "Roulette", "Pistola", "Viola", "Zecca", "Guanto", "Francia", "Miele", "Africa", "Drago", "Sacco", "Fortuna", "Rospo", "Guerra", "Milionario", "Aquila", "Incontro", "Acqua", "Supereroe", "Hotel", "Notte", "Pane", "Modello", "Ketchup", "Folletto", "Casinò", "Messico", "Grattacielo", "Indice", "Malattia", "Peso", "Occhio", "Stagno", "Ospedale", "Grado", "Limousine", "Radice", "Ambulanza", "Vento", "Bronzo", "Leone", "Metro", "Batteria", "Piovra", "Fantasia", "Coppa", "Elicottero", "Spina", "Laser", "Stivale", "Mela", "Monete", "Vita", "Corte", "Gelato", "Opera", "Furgone", "Limone", "Angelo", "Capitale", "Botte", "Verme", "Gigante", "Tempio", "Letto", "Rivoluzione", "Muro", "Borsa", "Torre", "Tubo", "Lettera", "Asse", "Cravatta", "Scheda", "Diamante", "Posizione", "Croce", "Mutande", "Rete", "Vita", "Punto", "Baffo", "Passo", "Pecora", "Piatto", "Guardia", "Buco", "Zucchero", "Campana", "New York", "Forza", "Rombo", "Chiave", "Piega", "Motore", "Porta", "Onda", "Foro", "Flusso", "Marmo", "Testa", "Pranzo", "Polo", "Caffè", "Centro", "Colombo", "Parco", "Capo", "Pasta", "Piano", "Braccio", "Amo", "Codice", "Profilo", "Cerchio", "Treno", "Campo", "Topo", "Canna", "Film", "Napoli", "Freddo", "Australia", "Bar", "Bermuda", "Capelli", "Tokyo", "Resistenza", "Egitto", "Piastra", "Londra", "Elefante", "Zucca", "Pipa", "Mosca", "Ombelico", "Svizzera", "Bottone", "Dante", "Tesoro", "Hollywood", "Albero", "Grecia", "Uovo", "Roma", "Vuoto", "Himalaya", "Radio", "Ninja", "Energia", "Spaghetto", "Porto", "Pinocchio", "Cornice", "Germania", "Cimice", "Stato", "Assassino", "America", "Flauto", "Atlantide", "Spada", "Italia", "Kiwi", "Banco", "Lingua", "Ago", "Anno", "Cuore", "Salsa", "Canale", "Mossa", "Posta", "Calice", "Bocca", "Disco", "Mano", "Viaggio", "Etichetta", "Diavolo", "Neve", "Aereo", "Linea", "Natale", "Avorio", "Cassa", "Corno", "Parte", "Base", "Sangue", "Anello", "Nota", "Stella", "Pera", "Coperta", "Chiodo", "Cambio", "Seno", "Casa", "Giro", "Soldato", "Blocco", "Fila", "Torcia", "Petto", "Schermo", "Sale", "Partita", "Catena", "Corda", "Area", "Piramide", "Suono", "Ornitorinco", "Lira", "Triangolo", "Oro", "Pollice", "Yeti", "Errore", "Cane", "Sedia", "Spazio", "Riga", "Isola", "Tempo", "Maiale", "Squadra", "Scarpa", "Tiro", "Corona", "Vetro", "Gas", "Regina", "Fiera", "Spirito", "Teatro", "Polizia", "Magia", "Fetta", "Giorno", "Nave", "Pollo", "Re", "Arco", "Palla", "Carta", "Forchetta", "Quadro", "Pilota", "Tazza", "Coltello", "Gru", "Dente", "Organo", "Piede", "Banda", "Bottiglia", "Figura", "Insegnante", "Mercurio", "Manto", "Cotone", "Fusto", "Cuoco", "Scala", "Foresta", "Ciclo", "Coniglio", "Ruota", "Banca", "Macchina", "Noce", "Trama", "Orso", "Libro", "Gatto", "Pirata", "Torta", "Saturno", "Lupo", "Genio", "Fattura", "Pinguino", "Verde", "Frusta", "Squalo", "Jet", "Contrabbandiere", "Alieno", "Scorpione", "Ambasciata", "Verso", "Tromba", "Pesca", "Pupazzo di neve", "Alpi", "Principessa", "Scampo", "Dinosauro", "Venezia", "Cioccolato", "Pechino", "Missile", "Riso", "Concerto", "Europa", "Spia", "Bacino", "Ladro", "Tasso", "Chiesa", "Busta", "Sommozzatore", "Giove", "Guarnizione", "Cavallo", "Ramo", "Cintura", "Pianta", "Canguro", "Mina", "Pesce", "Cera", "Paracadute", "Falange", "Telescopio", "Ritmo", "Strega", "Collo", "Olimpo", "Colpo", "Ponte", "Massa", "Ghiaccio", "Mora", "Satellite", "Tavola", "Lampo", "Imposta", "Centauro", "Miglio", "Arresto", "Unicorno", "Volo", "Ombra", "Balena", "Vino", "Luna", "Dado", "Robot", "Agente", "Microscopio", "Colonna", "Veleno", "Cavaliere", "Raggio", "Rosa", "Becchino", "Terra", "Dottore"];
    var cards = document.getElementsByClassName("card");
	for (var card in cards){
	    var rand = [Math.floor(Math.random()*all_words.length)];
        cards[card].innerHTML = all_words[rand];
        selected_words.push(all_words[rand])
        all_words.splice(rand, 1)
    }
}

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

getWords()
