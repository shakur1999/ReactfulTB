// change the songlist to userslist

import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo"

class SongList extends Component {
    renderSongs() {
        return(
            this.props.data.songs.map(song => {
                return(
                    <li key={song.id} className="collection-item">
                        {song.title}
                    </li>
                )
            })
        )
    }

    render() {                     
        if(this.props.loading) { return <div>Loading...</div>; }
        return (
            <ul className="collections">
                {this.renderSongs()}
            </ul>
        );
    }
}

const query = gql`
{
    songs{
        id
        title
    }
}
`;


export default graphql(query)(SongList);