import React from 'react'
import ReactDOM from 'react-dom'
import { TarotDeck } from './deck.js'

window.onload = function () {
  const spreadStyles = {
    padding: '50px',
    display: 'flex'

  }
  const cardStyles = {
    width: '180px',
    background: 'black',
    color: 'white',
    margin: '10px',
    padding: '5px'
  }

  class Card extends React.Component {
    render () {
      return (
        <div style={cardStyles} key={this.props.name} >
          <p>card: {this.props.name}</p>
          <img src={this.props.image} alt={this.props.name} style={{width: '100%'}} />
        </div>
      )
    }
  }

  class Spread extends React.Component {
    render () {
      var deck = new TarotDeck()
      var shuffledDeck = deck.shuffle()
      var hand = []
      hand = deck.deal(shuffledDeck, 3)
      return (
        <div style={spreadStyles}>
          {hand.map((item) => {
            return <Card key={item.name} name={item.name} image={item.image} />
          })}
        </div>
      )
    }
  }
  ReactDOM.render(
    <Spread />,
    document.getElementById('app')
  )
}
