import React from 'react';
import axios from 'axios'

class CardItem extends React.Component {


    state = {
        posts: [],
        error: null,
        isLoading: true
    }


    componentDidMount() {

        this.fetchPosts()

    }

    fetchPosts = () => {
        axios.get('http://jsonplaceholder.typicode.com/comments', {
            params: {
                _limit: 10
            }
        })
            .then((response) => {
                this.setState({
                    posts: response.data,
                    isLoading: false
                })
            })
            .catch(
                error => this.setState({ error, isLoading: false })
            )
            .then(function () {
                // always executed
            });
    }

    render() {
        const { isLoading, posts, error } = this.state;
        return (
            <React.Fragment>
                <div className="card-item">
                    <h1>Random User</h1>
                    // Display a message if we encounter an error
                    {error ? <p>{error.message}</p> : null}
                    // Here's our data check
                    {!isLoading ? (
                        posts.map(post => {
                            const { name, body } = post;
                            return (
                                <div key={name}>
                                    <h2>{name}</h2>
                                    <p>{body}</p>
                                    <hr />
                                </div>
                            );
                        })

                    ) : (
                            <h3>Loading...</h3>
                        )}
                </div>
            </React.Fragment>
        );
    }
}

export default CardItem;
