class TarotDeck {
  shuffle () {
    var shuffledDeck = orderedTarotCards.slice(0);
    var m = shuffledDeck.length;
    var t;
    var i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = shuffledDeck[m];
      shuffledDeck[m] = shuffledDeck[i];
      shuffledDeck[i] = t;
    }

    return shuffledDeck
  }

  deal (shuffledDeck, numberOfCards) {
    // identify [numberOfCards] unique cards (indexes) from the provided array
    var i = 0;
    var draw = [];

    while (i < numberOfCards) {
      draw.push(this.selectUniqueRandom(shuffledDeck, draw));
      i++;
    }
    return draw
  }

  selectUniqueRandom (deck, hand) {
    let index = Math.floor(Math.random() * 78);
    if (hand.find((item) => item === deck[index])) {
      return this.selectUniqueRandom(deck, hand)
    } else {
      return deck[index]
    }
  }
}
// wands cups swords pentacles
const orderedTarotCards = [
  {n: 0, name: 'The Fool', image: './images/magician.jpg'},
  {n: 1, name: 'The Magician', image: './images/magician.jpg'},
  {n: 2, name: 'The High Priestess', image: './images/magician.jpg'},
  {n: 3, name: 'The Empress', image: './images/magician.jpg'},
  {n: 4, name: 'The Emperor', image: './images/magician.jpg'},
  {n: 5, name: 'The Hierophant', image: './images/magician.jpg'},
  {n: 6, name: 'The Lovers', image: './images/magician.jpg'},
  {n: 7, name: 'The Chariot', image: './images/magician.jpg'},
  {n: 8, name: 'Strength', image: './images/magician.jpg'},
  {n: 9, name: 'The Hermit', image: './images/magician.jpg'},
  {n: 10, name: 'Wheel of Fortune', image: './images/magician.jpg'},
  {n: 11, name: 'Justice', image: './images/magician.jpg'},
  {n: 12, name: 'The Hermit', image: './images/magician.jpg'},
  {n: 13, name: 'Death', image: './images/magician.jpg'},
  {n: 14, name: 'Temperance', image: './images/magician.jpg'},
  {n: 15, name: 'The Devil', image: './images/magician.jpg'},
  {n: 16, name: 'The Tower', image: './images/magician.jpg'},
  {n: 17, name: 'The Star', image: './images/magician.jpg'},
  {n: 18, name: 'The Moon', image: './images/magician.jpg'},
  {n: 19, name: 'The Sun', image: './images/magician.jpg'},
  {n: 20, name: 'Judgement', image: './images/magician.jpg'},
  {n: 21, name: 'The World', image: './images/magician.jpg'},
  {n: 22, name: 'One of Wands', image: './images/magician.jpg'},
  {n: 23, name: 'Two of Wands', image: './images/magician.jpg'},
  {n: 24, name: 'Three of Wands', image: './images/magician.jpg'},
  {n: 25, name: 'Four of Wands', image: './images/magician.jpg'},
  {n: 26, name: 'Five of Wands', image: './images/magician.jpg'},
  {n: 27, name: 'Six of Wands', image: './images/magician.jpg'},
  {n: 28, name: 'Seven of Wands', image: './images/magician.jpg'},
  {n: 29, name: 'Eight of Wands', image: './images/magician.jpg'},
  {n: 30, name: 'Nine of Wands', image: './images/magician.jpg'},
  {n: 31, name: 'Ten of Wands', image: './images/magician.jpg'},
  {n: 32, name: 'Paige of Wands', image: './images/magician.jpg'},
  {n: 33, name: 'Knight of Wands', image: './images/magician.jpg'},
  {n: 34, name: 'Queen of Wands', image: './images/magician.jpg'},
  {n: 35, name: 'King of Wands', image: './images/magician.jpg'},
  {n: 36, name: 'One of Cups', image: './images/magician.jpg'},
  {n: 37, name: 'Two of Cups', image: './images/magician.jpg'},
  {n: 38, name: 'Three of Cups', image: './images/magician.jpg'},
  {n: 39, name: 'Four of Cups', image: './images/magician.jpg'},
  {n: 40, name: 'Five of Cups', image: './images/magician.jpg'},
  {n: 41, name: 'Six of Cups', image: './images/magician.jpg'},
  {n: 42, name: 'Seven of Cups', image: './images/magician.jpg'},
  {n: 43, name: 'Eight of Cups', image: './images/magician.jpg'},
  {n: 44, name: 'Nine of Cups', image: './images/magician.jpg'},
  {n: 45, name: 'Ten of Cups', image: './images/magician.jpg'},
  {n: 46, name: 'Paige of Cups', image: './images/magician.jpg'},
  {n: 47, name: 'Knight of Cups', image: './images/magician.jpg'},
  {n: 48, name: 'Queen of Cups', image: './images/magician.jpg'},
  {n: 49, name: 'King of Cups', image: './images/magician.jpg'},
  {n: 50, name: 'One of Swords', image: './images/magician.jpg'},
  {n: 51, name: 'Two of Swords', image: './images/magician.jpg'},
  {n: 52, name: 'Three of Swords', image: './images/magician.jpg'},
  {n: 53, name: 'Four of Swords', image: './images/magician.jpg'},
  {n: 54, name: 'Five of Swords', image: './images/magician.jpg'},
  {n: 55, name: 'Six of Swords', image: './images/magician.jpg'},
  {n: 56, name: 'Seven of Swords', image: './images/magician.jpg'},
  {n: 57, name: 'Eight of Swords', image: './images/magician.jpg'},
  {n: 58, name: 'Nine of Swords', image: './images/magician.jpg'},
  {n: 59, name: 'Ten of Swords', image: './images/magician.jpg'},
  {n: 60, name: 'Paige of Swords', image: './images/magician.jpg'},
  {n: 61, name: 'Knight of Swords', image: './images/magician.jpg'},
  {n: 62, name: 'Queen of Swords', image: './images/magician.jpg'},
  {n: 63, name: 'King of Swords', image: './images/magician.jpg'},
  {n: 64, name: 'One of Pentacles', image: './images/magician.jpg'},
  {n: 65, name: 'Two of Pentacles', image: './images/magician.jpg'},
  {n: 66, name: 'Three of Pentacles', image: './images/magician.jpg'},
  {n: 67, name: 'Four of Pentacles', image: './images/magician.jpg'},
  {n: 68, name: 'Five of Pentacles', image: './images/magician.jpg'},
  {n: 69, name: 'Six of Pentacles', image: './images/magician.jpg'},
  {n: 70, name: 'Seven of Pentacles', image: './images/magician.jpg'},
  {n: 71, name: 'Eight of Pentacles', image: './images/magician.jpg'},
  {n: 72, name: 'Nine of Pentacles', image: './images/magician.jpg'},
  {n: 73, name: 'Ten of Pentacles', image: './images/magician.jpg'},
  {n: 74, name: 'Paige of Pentacles', image: './images/magician.jpg'},
  {n: 75, name: 'Knight of Pentacles', image: './images/magician.jpg'},
  {n: 76, name: 'Queen of Pentacles', image: './images/magician.jpg'},
  {n: 77, name: 'King of Pentacles', image: './images/magician.jpg'}
];

export { TarotDeck };
