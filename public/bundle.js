import { TarotDeck } from './deck.js';

// console.log("hello world");


// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('tarotApp')
//   );

  window.onload = function()
    {
        class Greetings extends React.Component
        {
            render()
            {
                //return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
                return React.createElement('h1', null, 'Greetingz, ' + this.props.name + '!');
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
                console.log(hand);
                return React.createElement('div', null, `
                    
                `);
            }
        }
        ReactDOM.render(
            React.createElement('div', null, 
            React.createElement(Greetings, { name : 'Chris' }),
            React.createElement(Greetings, { name : 'George' }),
            React.createElement(Spread),
        ),
            document.getElementById('tarotApp')
        );
    };