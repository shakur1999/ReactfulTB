import React, { Component } from "react";
import gql from "graphql-tag";
import { Link } from "react-router";
import { graphql } from "react-apollo"
import query from "../queries/fetchSongs";

class SongList extends Component {
                                                                            // constructor(props) {
                                                                            //     super(props);
                                                                            //     this.state = {songs: []};
                                                                            // }
    onSongDelete(id) {
        this.props.mutate({ variables: { id } })   
        .then(()=> this.props.data.refetch());     //graphQL knows the props return and make it accesible via `refech` function
    }
    
    renderSongs() {
        return this.props.data.songs.map(song => {    
            return(                  
                <li key={song.id} className="collection-item">
                    {song.title}
                        <i className="material-icons" 
                        onClick={() => this.onSongDelete(song.id)}
                        >delete</i>
                </li>
            );
        });
    }

    render() {                     
        if(this.props.data.loading) { return <div>bro, chill out data still loading...</div>; }
         return (
            <div>
                <h5>Next Man Up:</h5>
                <ol className="collection">
                    {this.renderSongs()}
                </ol>

                <Link
                    to="users/new" className="btn-float btn-large red right" >
                    < i className="material-icons">add</i>
                </Link>
            </div>
        );
    } 
}

const mutation = gql `
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
        id
    }
    }
`;

export default graphql(mutation)(
    graphql(query)(SongList)
); 
