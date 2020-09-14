import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql ,compose} from "react-apollo";
import { getAuthorsQuery, addBookMutation } from "../queries";

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John'
        }
    }
    showAuthors() {
        var data = this.props.getAuthorsQuery;
        if (data.loading) {
            return (<option disabled>Loading authors</option>)
        }
        else {
            return data.authors.map(author => (<option value={author.id}>{author.name}</option>))
        }
    }
    save(event) {
        console.log('saved....');
        this.props.addBookMutation({
            variables: {
                name: this.state.name
            }
        })
    }
    render() {
        return (
            <form onSubmit={this.save.bind(this)}>
                <input placeholder="Name" onChange={event => this.setState({ name: event.target.value })} />
                <select>
                    <option>select Author</option>
                    {this.showAuthors()}
                </select>
                <button>Save</button>
            </form>
        )
    }
}

export default compose(graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);