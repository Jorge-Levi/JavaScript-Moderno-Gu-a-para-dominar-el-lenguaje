let deck = [];
let carta;
let puntosJugador = 0;
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
const btnPedir = document.querySelector('#btnPedir');
const smalls = document.querySelectorAll('small');  

// FUNCION PARA CREAR UNA NUEVA BARAJA
const crearDeck = () =>{
    for(let i = 2 ; i <=10 ; i++){
        for(tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for(tipo of tipos){
        for(especial of especiales){
            deck.push(especial + tipo);
        }
    }
    // USAMOS LA LIBRERIA underscore PARA PODER UTILIZAR LA FUNCION _.shuffle Y HACER QUE NOS REVUELVA EL ARRAY
    return _.shuffle(deck); 
};
// FUNCION PARA SACAR LA ULTIMA CARTA
const pedirCarta = () => {
    if(deck.length != 0){
        return deck.pop() 
    }else{
        alert ('No hay cartas en el deck');
        throw 'No hay cartas en el deck';
    }
};
// DANDO VALOR A LAS CARTAS
const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length - 1);
    if(isNaN(valor)){
        // Los A valen 11 y las demas letras valen 10
        return (valor === 'A') ? 11 : 10;
    }else{
        return parseInt(valor);
    }
}
// HACER DECK
deck = crearDeck();

// REMOVIENDO CARTA
btnPedir.addEventListener('click', () => {
    carta = pedirCarta();
    valorCartaR = valorCarta(carta);
    // console.log(valorCartaR);
    puntosJugador += valorCartaR;
    // console.log(puntosJugador);
    // console.log(smalls);
    smalls[0].innerText = puntosJugador; // AGREGANDO PUTOS A JUGADOR
});
