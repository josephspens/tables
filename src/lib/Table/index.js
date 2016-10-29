import React, { Component, PropTypes } from 'react';

export default class Table extends Component {
  static defaultProps = {
    sortItems: () => {}
  }

  static propTypes = {
    fetchItems: PropTypes.func.isRequired,
    sortItems: PropTypes.func,
    username: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }

  static contextTypes = {
    theme: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.fetchItems(this.props.username);
  }

  render() {
    return (
      <table
        style={this.context.theme.table}
        cellSpacing={0}
      >
        <thead style={this.context.theme.tableHead}>
          <tr>
            {this.props.columns.map(({ name, id }) => (
              <th
                key={id}
                style={this.context.theme.tableCell}
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((item, index) => (
            <tr key={index}>
              {this.props.columns.map(({ id }) => (
                <td
                  key={id}
                  style={this.context.theme.tableCell}
                >
                  {item[id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
