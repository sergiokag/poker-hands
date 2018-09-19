// import shuffled deck
const _deck = require('../generateDeck/');
const _hand = _deck.slice(0, 5);

// sort results
_hand.sort((a,b) => a.ranking - b.ranking);

module.exports= _hand;