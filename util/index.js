const _checkRepeat = function(arr) {

  const obj = {};
  
  arr.forEach( (el) => {

    if(!obj[el.ranking]) {
      obj[el.ranking] = 1;
    }
    else {
      obj[el.ranking] += 1;
    }

  });

  return  obj;
};

const _getRepeatedCards = function(arr) {

  const _arr = Object.entries(_checkRepeat(arr));
  return _arr.filter( c => c[1] > 1 );

};

const _checkSuit = function(arr) {

  const obj = {}

  arr.forEach( c => {

    if(!obj[c.suit]) {
      obj[c.suit] = 1;
    }
    else{
      obj[c.suit] += 1;
    }

  })

  return obj;
};

const _sameSuit = function (arr) {
  return arr.every( (c,i,r) => {
    return (r[i+1]) ? ( r[i+1].suit  === r[i].suit ) : ( r[i].suit === r[0].suit );
  })
};

const _maxRank = function(arr) {
  return Math.max( ...arr.map(c => c.ranking) );
};

const _minRank = function(arr) {
  return Math.min( ...arr.map(c => c.ranking) );
};

const _inOrder = function(arr) {
  return arr.every( (c,i,r) => {

    return (r[i+1]) ? ( r[i+1].ranking - r[i].ranking ) === 1 : ( r[i].ranking - r[0].ranking ) === arr.length - 1;

  });
};

const _isAceMin = function(arr) {
  if( _minRank(arr) === 1 && _maxRank(arr) === 13 ) {
    const _cp = arr.slice(0,4);
    return _inOrder(_cp);
  }
  return false;
};

module.exports = {
  _checkRepeat,
  _getRepeatedCards,
  _checkSuit,
  _sameSuit,
  _maxRank,
  _minRank,
  _inOrder,
  _isAceMin
};
