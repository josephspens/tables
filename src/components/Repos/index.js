import { connect } from 'react-redux';

import Table from '../../lib/Table';
import * as Actions from '../../actions/repos';

export const mapStateToProps = ({ repos }) => ({
  ...repos,
  columns: [
    { name: 'Name', id: 'name' },
    { name: 'Forks', id: 'forks' }
  ],
  sortable: [
    'name'
  ]
});

export const mapDispatchToProps = (dispatch, { username }) => ({
  fetchItems: (options) => dispatch(Actions.requestRepos(username, options))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
