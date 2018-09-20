const _utils = require('../util/index');

function rules (arr) {

  console.log(_utils._checkRepeat(arr)); // WORKS
  console.log('\n')
  console.log('Flush testing: ', _utils._inOrder(arr) === false && _utils._sameSuit(arr))

  // ROYAL FLUSH
  if ( _utils._inOrder(arr) && _utils._sameSuit(arr) && ( _utils._maxRank(arr) === 13 )  && ( _utils._minRank(arr) === 10 ) ) {
      return console.log(`It's Royal Flush!!!`, arr);
  }

  // STRAIGHT FLUSH
  if (
        ( _utils._inOrder(arr) && _utils._sameSuit(arr) && ( _utils._maxRank(arr) !== 13 )  && ( !_utils._minRank(arr) !== 10 ) )

        ||

        ( _utils._inOrder(arr) && _utils._sameSuit(arr) && _utils._isAceMin(arr) )
      ) {
    return console.log(`It's Straight Flush!!!`, arr);
  }

  // FOUR OF A KIND
  if (_utils._getRepeatedCards(arr).length && _utils._getRepeatedCards(arr)[0][1] === 4) {
    return console.log(`It's Four of a Kind (${ arr.find( c => c.ranking === +_utils._getRepeatedCards(arr)[0][0] ).name }) !!!`, arr);
  }

  // FULL HOUSE or TWO PAIR
  if ( _utils._getRepeatedCards(arr).length === 2 ) {
    const _reapetedCards = _utils._getRepeatedCards(arr);
    const isTwoPair = _reapetedCards.every( r => r[1] === 2 );
    const isFullHouse = _reapetedCards.every( r => ( r[1] === 2 || r[1] === 3 ) );
    return (isTwoPair)? console.log(`It's Two pair !!!`, arr) : ( (isFullHouse)? console.log(`It's Full House !!!`, arr) : console.log(`...`) );
  }

  // FLUSH
  if ( _utils._inOrder(arr) === false && _utils._sameSuit(arr) ) {
    return console.log(`It's Flush!!!`, arr);
  }

  // STRAIGHT
  if (
        ( _utils._inOrder(arr) && _utils._sameSuit(arr) === false )
            ||
        ( _utils._maxRank(arr) === 13 && _utils._isAceMin(arr) && _utils._sameSuit(arr) === false )
      ) {
    const _aceExists =  _utils._maxRank(arr) === 13;
    return (_aceExists && _utils._isAceMin(arr) )? console.log(`It's straight (Ace is min)!!!`,  arr) : console.log(`It's straight (Ace is max)!!!`,  arr);
  }

  // THREE OF A KIND
  if (_utils._getRepeatedCards(arr).length && _utils._getRepeatedCards(arr)[0][1] === 3) {
    return console.log(`It's Three of a Kind (${ arr.find( c => c.ranking === +_utils._getRepeatedCards(arr)[0][0] ).name }) !!!`, arr);
  }

  // PAIR
  if (_utils._getRepeatedCards(arr).length && _utils._getRepeatedCards(arr)[0][1] === 2) {
    return console.log(`It's Pair (${ arr.find( c => c.ranking === +_utils._getRepeatedCards(arr)[0][0] ).name }) !!!`, arr);
  }

  // HIGH CARD
  if ( !_utils._inOrder(arr)
         &&
       !_utils._sameSuit(arr)
         &&
       !_utils._getRepeatedCards(arr).length
     ) {
      const _highCardRank = _utils._maxRank(arr);

      return console.log(`High card: (${ arr.find( c => c.ranking === _highCardRank ).name }) !!!`, arr);
  }

};

module.exports = rules;
