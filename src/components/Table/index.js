import React, { Component, PropTypes } from 'react';

export default class Table extends Component {
  static contextTypes = {
    theme: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <table
        style={this.context.theme.table}
        cellSpacing={0}
      >
        <thead style={this.context.theme.tableHead}>
          <tr>{this.props.children}</tr>
        </thead>
        <tbody>
          {this.props.items.map((item, index) => (
            <tr key={index}>
              {Object.keys(item).map(key => (
                <td
                  key={key}
                  style={this.context.theme.tableCell}
                >
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
