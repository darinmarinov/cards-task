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
      isLoading: true,
      formErrors: [],
      card: {
        id: 2,
        name: 'Title',
        body: 'Content'
      }
    }
  }
  

  componentDidMount() {
    setTimeout(() => { this.fetchCards() }, 1200);
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
    this.setState({ cards: newCards });
  }

  
  errorClass = () => {
    return(this.state.formErrors.length === 0 ? '' : 'c-error c-validation');
  }

  addCardItem = e => {
    e.preventDefault();
    const { id, name, body } = this.state.card;
    const errors = this.validate(name, body);

    if (errors.length > 0) {
      this.setState({ formErrors: errors })
      return;
    }
    const newCard = {
      id: id,
      name: name,
      body: body
    }
    this.setState({ cards: [newCard, ...this.state.cards] })
  }

  validate = (name, body) => {
    const errors = [];

    if ((!name && name.length === 0) && (!body &&  body.length === 0)) {
      errors.push(" Name and Content can't be empty. ");
    }else{
      this.setState({formErrors:[]})
    }

    return errors;
  }

  updateValue(e) {
    const target = e.target;
    const id = _.random(0, 1000)
    this.setState({ card: { id: id, name: [target.value], body: [target.value] } })
  }

  reOrderCardItemsByName = () => {
    const { cards } = this.state;
    const sorted = _.sortBy(cards, "name")
    this.setState({ cards: sorted });
  }

  reOrderCardItemsByTitle = () => {
    const { cards } = this.state;
    const sorted = _.sortBy(cards, "body")
    this.setState({ cards: sorted });
  }

  reOrderCardItemsById = () => {
    const { cards } = this.state;
    const sorted = _.sortBy(cards, "id")
    this.setState({ cards: sorted });
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

        <form className='text-center' onSubmit={this.addCardItem}>
          <input
            className='form__input'
            placeholder="Add Card Item Title"
            onFocus={e => e.target.value === this.state.card.name ? e.target.value = '' :  null}
            value={this.state.card.name}
            onChange={(e) => { this.updateValue(e) }}
          />
          <input
            className='form__input'
            placeholder="Add Card Item Body"
            onFocus={e => e.target.value === this.state.card.body ? e.target.value = '' :  null}
            value={this.state.card.body}
            onChange={(e) => { this.updateValue(e) }}
          />
          <button className='btn' type="submit">Add Item</button>
        </form>
        <div className={`${this.errorClass()} error`}>
          {this.state.formErrors.map(error => (
            <p key={error}>Error: {error}</p>
          ))}
        </div>
        <ul className="cards">
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            cards.map((card, index) => {
              const { id, name, body } = card;
              return (
                <CardItem key={id} name={name} body={body} id={id} index={index} removeItem={this.removeCardItem} />
              );
            })
          ) : (
              <Loading />
            )}
        </ul>
      </React.Fragment >
    );
  }
}

export default CardsList;
