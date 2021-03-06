import React, { Component, PropTypes } from 'react';
import propTypes from './propTypes';
import Pagination from '../Pagination';
import { getSortableIcon } from './utils';

export default class Table extends Component {
  static defaultProps = {
    sortItems: () => {},
    items: []
  }

  static propTypes = propTypes

  static contextTypes = {
    theme: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { start, limit } = this.props;
    this.props.fetchItems({ start, limit });
  }

  render() {
    return (
      <div>
        <table
          style={this.context.theme.table}
          cellSpacing={0}
        >
          <thead style={this.context.theme.tableHead}>
            <tr>
              {this.props.columns.map(({ name, id }) => (
                <th
                  key={id}
                  style={this.context.theme.tableColumnHeader}
                >
                  {name}
                  <span
                    style={this.context.theme.tableColumnHeaderDirection}
                    dangerouslySetInnerHTML={{
                      __html: getSortableIcon({
                        sortableColumns: this.props.sortable,
                        sortedColumn: this.props.sort,
                        columnId: id,
                        sortDirection: this.props.direction
                      })
                    }}
                  ></span>
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
          <tfoot>
            <tr>
              <td colSpan={this.props.columns.length}>
                <Pagination
                  fetch={this.props.fetchItems}
                  {...this.props.page}
                  limit={this.props.limit}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
