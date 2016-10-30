import { PropTypes } from 'react';

export const columnHeader = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}).isRequired

export default {
  items: PropTypes.array,
  fetchItems: PropTypes.func.isRequired,
  sortItems: PropTypes.func,
  username: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(columnHeader).isRequired
}
