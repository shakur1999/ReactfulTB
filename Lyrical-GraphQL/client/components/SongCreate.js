import React, { Component } from "react";
import {graphql} from "react-apollo";
import { Link, hashHistory } from "react-router";
import gql from "graphql-tag";
import query from "../queries/fetchSongs";

class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {title: ''}; 
    }

   // Event onSumbit handler to invoke mutation
    onSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: {title: this.state.title},
            refetchQueries: [{ query }] // this is to re-run the query song and fetch again 
        }).then(() => hashHistory.push('/'))
    }

    render() {
        return(
            <div>
                <Link to="/">Show Users</Link>
                <h3>Need Help?</h3>
                <h5>Please Scan badge below:</h5>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>User Name:</label>
                    <input
                        onChange={event => this.setState({title: event.target.value})}
                        value={this.state.title}
                    />
                </form>
            </div>
        );
    }
}


// Define the ADD mutation with Query Vairables:
const mutation = gql `
    mutation AddSong($title: String){
        addSong(title: $title) {
            title
        }
    }
`;

export default graphql (mutation)(SongCreate);
