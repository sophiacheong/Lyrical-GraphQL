import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    })
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input onChange={this.handleChange} value={this.state.title} />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);