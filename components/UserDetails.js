import React, { Component } from "react";
import { graphql } from "react-apollo";

class UserDetails extends Component {
    render() {
        return(
            <div>
                <h3>Users Details Below</h3>
            </div>
        );
    }
}

export default graphql (queryName, {
    options: (props) => {return { variables: { id: props.params.id } } }
}) (SongDetail);
