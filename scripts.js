const suits = ['hearts', 'dieamons', 'clubs', 'spades'];
const values = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K'
];

const deck = [
  { Value: 'A', Suit: 'Hearts' },
  { Value: 'A', Suit: 'Diamonds' },
  { Value: 'A', Suit: 'Clubs' },
  { Value: 'A', Suit: 'Spades' },
  { Value: '2', Suit: 'Hearts' },
  { Value: '2', Suit: 'Diamonds' },
  { Value: '2', Suit: 'Clubs' },
  { Value: '2', Suit: 'Spades' },
  { Value: '3', Suit: 'Hearts' },
  { Value: '3', Suit: 'Diamonds' },
  { Value: '3', Suit: 'Clubs' },
  { Value: '3', Suit: 'Spades' },
  { Value: '4', Suit: 'Hearts' },
  { Value: '4', Suit: 'Diamonds' },
  { Value: '4', Suit: 'Clubs' },
  { Value: '4', Suit: 'Spades' },
  { Value: '5', Suit: 'Hearts' },
  { Value: '5', Suit: 'Diamonds' },
  { Value: '5', Suit: 'Clubs' },
  { Value: '5', Suit: 'Spades' },
  { Value: '6', Suit: 'Hearts' },
  { Value: '6', Suit: 'Diamonds' },
  { Value: '6', Suit: 'Clubs' },
  { Value: '6', Suit: 'Spades' },
  { Value: '7', Suit: 'Hearts' },
  { Value: '7', Suit: 'Diamonds' },
  { Value: '7', Suit: 'Clubs' },
  { Value: '7', Suit: 'Spades' },
  { Value: '8', Suit: 'Hearts' },
  { Value: '8', Suit: 'Diamonds' },
  { Value: '8', Suit: 'Clubs' },
  { Value: '8', Suit: 'Spades' },
  { Value: '9', Suit: 'Hearts' },
  { Value: '9', Suit: 'Diamonds' },
  { Value: '9', Suit: 'Clubs' },
  { Value: '9', Suit: 'Spades' },
  { Value: '10', Suit: 'Hearts' },
  { Value: '10', Suit: 'Diamonds' },
  { Value: '10', Suit: 'Clubs' },
  { Value: '10', Suit: 'Spades' },
  { Value: 'J', Suit: 'Hearts' },
  { Value: 'J', Suit: 'Diamonds' },
  { Value: 'J', Suit: 'Clubs' },
  { Value: 'J', Suit: 'Spades' },
  { Value: 'Q', Suit: 'Hearts' },
  { Value: 'Q', Suit: 'Diamonds' },
  { Value: 'Q', Suit: 'Clubs' },
  { Value: 'Q', Suit: 'Spades' },
  { Value: 'K', Suit: 'Hearts' },
  { Value: 'K', Suit: 'Diamonds' },
  { Value: 'K', Suit: 'Clubs' },
  { Value: 'K', Suit: 'Spades' }
];

const getDeck = () => {
  let deck = new Array();
  for (let i = 0; i < suits.length; i++) {
    for (let n = 0; n < values.length; n++) {
      let card = { Value: values[n], Suit: suits[i] };
      deck.push(card);
    }
  }
  return deck;
};

const shuffle = (deck) => {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
};

const renderDeck = (deck) => {
  document.getElementById('deck').innerHTML = '';
  for (let i = 0; i < deck.length; i++) {
    let card = document.createElement('div');
    let value = document.createElement('div');
    let suit = document.createElement('div');
    card.className = 'card';
    value.className = 'value';
    suit.className = 'suit ' + deck[i].Suit;

    value.innerHTML = deck[i].Value;
    card.appendChild(value);
    card.appendChild(suit);

    document.getElementById('deck').appendChild(card);
  }
};

const deck1 = getDeck();
shuffle(deck1);
renderDeck(deck1);

const dealCard = (deck) => {
  return deck.pop();
};

let card = dealCard(deck1);
console.log(card);

let players = new Array();

createPlayers = (num) => {
  players = new Array();
  for (let i = 1; i <= num; i++) {
    let hand = new Array();
    let player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
    players.push(player);
  }
};

const createPlayerInterface = () => {
  document.getElementById('players').innerHTML = '';
  for (let i = 0; i < players.length; i++) {
    let div_player = document.createElement('div');
    let div_playerid = document.createElement('div');
    let div_hand = document.createElement('div');
    let div_points = document.createElement('div');

    div_points.className = 'points';
    div_points.id = 'points_' + i;
    div_player.id = 'player_' + i;
    div_player.className = 'player';
    div_hand.id = 'hand_' + i;

    div_playerid.innerHTML = players[i].ID;
    div_player.appendChild(div_playerid);
    div_player.appendChild(div_hand);
    div_player.appendChild(div_points);
    document.getElementById('players').appendChild(div_player);
  }
};

const startBlackJack = () => {
  document.getElementById('startButton').value = 'Play';
  document.getElementById('status').style.display = 'none';

  currentPlayer = 0;
  createDeck();
  shuffle();
  createPlayerInterface();
  dealHands();
  document.getElementById('player_' + currentPlayer).classList.add('active');
};

const dealHands = () => {
    for (let i =o; i < 2; i++) {
        for (let x = 0; x < players.length; x++) {

        let card = deck.pop();
        players[x].Hand.push(card);
        renderCard(card, x);
        updatePoints();
    }
}
updateDeck();
}

const = renderCard = (card, player) => {
    let hand = document.getElementById('hand_' + player);
    hand.appendChild(getCardInterface(card));
}

const getCardInterface = (card) => {
    let el = document.createElement('div');
    el.classNAme = 'card';
    el.innerHTML = card.Suit + ' ' + card.Value;
    return el;
}

let currentPlayer = 0;
const hitMe = () => {
    let card = deck.pop();
    players.[currentPlayer].Hand.push(card);
    renderCard(card, currentPlayer);
    updatePoints();
    check();
}

const check = () => {
    if (players[currentPlayer].Points > 21) {
        document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' Lost';
    }
    }

const stay = () => {
    if (currentPlayer != players.length-1) {
        document.getElementById('player_' + currentPlayer).classList.remove('active');
        currentPlayer += 1;
        document.getElementById('player_' + currentPlayer).classList.add('active');
    } else {
        end();
    }
}

const end = () => {
    let winner = -1;
    let score = 0;

    for (let i = 0; i < players.length; i++) {
        if (players[i].Points > score && players[i].Points < 22) {
            winner = i;
        }
        score = players[i].Points;
    }
    document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID;
}