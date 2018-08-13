import { TarotDeck } from './deck.js';

// console.log("hello world");


// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('tarotApp')
//   );

  window.onload = function()
    {
        class Card extends React.Component
        {
            render()
            {
                return React.createElement('div', null, `card: ${this.props.name}`);
            }
        }

        class Spread extends React.Component
        {
            render()
            {
                var deck = new TarotDeck();
                var shuffledDeck = deck.shuffle();
                var hand = [];
                hand = deck.deal(shuffledDeck, 3);
                return hand.map((item) => {
                    return React.createElement(Card, {name : item.name })
                });
            }
        }
        ReactDOM.render(
            React.createElement('div', null, 
                React.createElement(Spread),
            ),
            document.getElementById('tarotApp')
        );
    };