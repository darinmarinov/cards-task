import React from 'react';
import CardItem from './CardItem'
import axios from 'axios'
import Loading from '../Loading/Loading'
import * as _ from "lodash";
import './Cards.css'

class CardsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      error: null,
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {this.fetchCards()}, 2200);
  }

  fetchCards = () => {
    axios.get('http://jsonplaceholder.typicode.com/comments', {
      params: {
        _limit: 10
      }
    })
      .then((response) => {
        this.setState({
          cards: response.data,
          isLoading: false
        })
      })
      .catch(
        error => this.setState({ error, isLoading: false })
      )
  }

  removeCardItem = id => {
    const { cards } = this.state;
    const newCards = cards.filter((card, i) => i !== id);
    this.setState({ cards: newCards});
  }

  reOrderCardItemsByName = () => {
    const { cards } = this.state;
    const sorted =  _.sortBy(cards,"name")
    this.setState({ cards: sorted});
  }

  reOrderCardItemsByTitle =  () => {
    const { cards } = this.state;
    const sorted =  _.sortBy(cards,"body")
    this.setState({ cards: sorted});
  }

  reOrderCardItemsById =  () => {
    const { cards } = this.state;
    const sorted =  _.sortBy(cards,"id")
    this.setState({ cards: sorted});
  }

  render() {
    const { isLoading, cards, error } = this.state;

    return (
      <React.Fragment>
        <div className="order-btns">
            <button className="btn btn--inline-block btn--transparent" onClick={this.reOrderCardItemsByName}> Re order by name</button>
            <button className="btn btn--inline-block btn--transparent" onClick={this.reOrderCardItemsById}> Re order by id</button>
            <button className="btn btn--inline-block btn--transparent" onClick={this.reOrderCardItemsByTitle}> Re order by title</button>
        </div>

        <ul className="cards">
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            cards.map((card, index) => {
              const {id, name, body } = card;
              return (
                <CardItem  key={id} name={name} body={body} id={id} index={index} removeItem={this.removeCardItem} />
              );
            })
            ) : (
              <Loading/>
            )}
        </ul>
      </React.Fragment >
    );
  }
}

export default CardsList;
