import React, { Component, PropTypes } from 'react';

export default class Pagination extends Component {
  static contextTypes = {
    theme: PropTypes.object.isRequired
  }

  render() {
    return (
      <div style={this.context.theme.pagination.container}>
        <button
          disabled={!this.props.first}
          onClick={() => this.props.fetch(this.props.first)}
        >First</button>
        <button
          disabled={!this.props.prev}
          onClick={() => this.props.fetch(this.props.prev)}
        >Prev</button>
        <button
          disabled={!this.props.next}
          onClick={() => this.props.fetch(this.props.next)}
        >Next</button>
        <button
          disabled={!this.props.last}
          onClick={() => this.props.fetch(this.props.last)}
        >Last</button>
      </div>
    );
  }
}
