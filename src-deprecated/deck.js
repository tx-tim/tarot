export class TarotDeck {
    shuffle() {
        // return an entire deck of 78 cards in a random order
        
        var usedIndexes = [];
        var shuffledDeck = [];
        var currentIndex = 0;

        while(usedIndexes.length <= 78) {
            // put the current item at a random index in shuffledDeck 
            // log that index in usedIndexes
            // increment the current item to the next 
            let currentItem = orderedTarotCards[currentIndex];
            let shuffledIndex = this.getUniqueIndex(usedIndexes);
            shuffledDeck[shuffledIndex] = currentItem;
            usedIndexes.push(shuffledIndex);
            currentIndex++;
        }
    }

    getUniqueIndex(array) {
        console.log(array);
        let i = Math.trunc(Math.random() * 79);
        if(array.has(i)) {
            this.getUniqueIndex(array);
        } else {
            return i;
        }
    }

    deal(numberOfCards) {

    }
}
//wands cups swords pentacles
const orderedTarotCards = [
    {n: 0, name: "The Fool"},
    {n: 1, name: "The Magician"},
    {n: 2, name: "The High Priestess"},
    {n: 3, name: "The Empress"},
    {n: 4, name: "The Emperor"},
    {n: 5, name: "The Hierophant"},
    {n: 6, name: "The Lovers"},
    {n: 7, name: "The Chariot"},
    {n: 8, name: "Strength"},
    {n: 9, name: "The Hermit"},
    {n: 10, name: "Wheel of Fortune"},
    {n: 11, name: "Justice"},
    {n: 12, name: "The Hermit"},
    {n: 13, name: "Death"},
    {n: 14, name: "Temperance"},
    {n: 15, name: "The Devil"},
    {n: 16, name: "The Tower"},
    {n: 17, name: "The Star"},
    {n: 18, name: "The Moon"},
    {n: 19, name: "The Sun"},
    {n: 20, name: "Judgement"},
    {n: 21, name: "The World"},
    {n: 22, name: "One of Wands"},
    {n: 23, name: "Two of Wands"},
    {n: 24, name: "Three of Wands"},
    {n: 25, name: "Four of Wands"},
    {n: 26, name: "Five of Wands"},
    {n: 27, name: "Six of Wands"},
    {n: 28, name: "Seven of Wands"},
    {n: 29, name: "Eight of Wands"},
    {n: 30, name: "Nine of Wands"},
    {n: 31, name: "Ten of Wands"},
    {n: 32, name: "Paige of Wands"},
    {n: 33, name: "Knight of Wands"},
    {n: 34, name: "Queen of Wands"},
    {n: 35, name: "King of Wands"},
    {n: 36, name: "One of Cups"},
    {n: 37, name: "Two of Cups"},
    {n: 38, name: "Three of Cups"},
    {n: 39, name: "Four of Cups"},
    {n: 40, name: "Five of Cups"},
    {n: 41, name: "Six of Cups"},
    {n: 42, name: "Seven of Cups"},
    {n: 43, name: "Eight of Cups"},
    {n: 44, name: "Nine of Cups"},
    {n: 45, name: "Ten of Cups"},
    {n: 46, name: "Paige of Cups"},
    {n: 47, name: "Knight of Cups"},
    {n: 48, name: "Queen of Cups"},
    {n: 49, name: "King of Cups"},
    {n: 50, name: "One of Swords"},
    {n: 51, name: "Two of Swords"},
    {n: 52, name: "Three of Swords"},
    {n: 53, name: "Four of Swords"},
    {n: 54, name: "Five of Swords"},
    {n: 55, name: "Six of Swords"},
    {n: 56, name: "Seven of Swords"},
    {n: 57, name: "Eight of Swords"},
    {n: 58, name: "Nine of Swords"},
    {n: 59, name: "Ten of Swords"},
    {n: 60, name: "Paige of Swords"},
    {n: 61, name: "Knight of Swords"},
    {n: 62, name: "Queen of Swords"},
    {n: 63, name: "King of Swords"},
    {n: 64, name: "One of Pentacles"},
    {n: 65, name: "Two of Pentacles"},
    {n: 66, name: "Three of Pentacles"},
    {n: 67, name: "Four of Pentacles"},
    {n: 68, name: "Five of Pentacles"},
    {n: 69, name: "Six of Pentacles"},
    {n: 70, name: "Seven of Pentacles"},
    {n: 71, name: "Eight of Pentacles"},
    {n: 72, name: "Nine of Pentacles"},
    {n: 73, name: "Ten of Pentacles"},
    {n: 74, name: "Paige of Pentacles"},
    {n: 75, name: "Knight of Pentacles"},
    {n: 76, name: "Queen of Pentacles"},
    {n: 77, name: "King of Pentacles"},
]