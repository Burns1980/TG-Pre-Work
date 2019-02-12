const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while(currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


//for loops are ideal when we know how many times a loop should run but while loops are great for
//when we don't. The while loops also checks its condition before entering the loop.
