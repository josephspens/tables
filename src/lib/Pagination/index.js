import React, { Component, PropTypes } from 'react';

export default class Pagination extends Component {
  static contextTypes = {
    theme: PropTypes.object.isRequired
  }

  render() {
    const styles = this.context.theme.pagination;
    return (
      <div style={styles.container}>
        <label
          style={styles.limit.container}
        >
          <select
            style={styles.limit.dropdown}
            value={this.props.limit}
            onChange={({ target: { value } }) => this.props.fetch({ limit: value })}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <small style={styles.limit.label}>items per page</small>
        </label>
        <button
          disabled={!this.props.first}
          onClick={() => this.props.fetch(this.props.first)}
          style={styles.button(this.props.first)}
        >First</button>
        <button
          disabled={!this.props.prev}
          onClick={() => this.props.fetch(this.props.prev)}
          style={styles.button(this.props.prev)}
        >Prev</button>
        <button
          disabled={!this.props.next}
          onClick={() => this.props.fetch(this.props.next)}
          style={styles.button(this.props.next)}
        >Next</button>
        <button
          disabled={!this.props.last}
          onClick={() => this.props.fetch(this.props.last)}
          style={styles.button(this.props.last)}
        >Last</button>
      </div>
    );
  }
}
