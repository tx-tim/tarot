import { TarotDeck } from './deck.js';

// console.log("hello world");


// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('tarotApp')
//   );

  window.onload = function()
    {

        const spreadStyles = {
            padding: '50px',
            display: 'flex'

        };
        const cardStyles = {
            width: '180px',
            background: 'black',
            color: 'white',
            margin: '10px',
            padding: '5px'
        };

        class Card extends React.Component
        {
            render()
            {
                return React.createElement('div', {style: cardStyles, key: this.props.name}, [
                    React.createElement('p', {key: `${this.props.name}-title`}, `card: ${this.props.name}`),
                    React.createElement('img', {key: `${this.props.name}-img`, style: {width: '100%'},src: this.props.image})
                ]);
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
                return React.createElement('div', {style: spreadStyles}, 
                    hand.map((item) => {
                        return React.createElement(Card, {key: item.name, name : item.name, image: item.image})
                    })
                )
            }
        }

        ReactDOM.render(
            React.createElement('div', null, 
                React.createElement(Spread),
            ),
            document.getElementById('tarotApp')
        );
    };