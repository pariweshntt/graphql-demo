import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
const getAuthors = gql`
{
    authors{
        name
        id
    }
}
`;

class AddBook extends Component{
   
    render(){
        return (
            <form >
                <input/>
                <button>Save</button>
            </form>
        )
    }
}

export default graphql(getAuthors)(AddBook);