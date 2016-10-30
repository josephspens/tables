import { connect } from 'react-redux';

import Table from '../../lib/Table';
import * as Actions from '../../actions/repos';

export const mapStateToProps = (state) => {
  const columns = [
    { name: 'Name', id: 'name' },
    { name: 'Forks', id: 'forks' }
  ];
  return { ...state.repos, columns };
}

export const mapDispatchToProps = (dispatch, { username }) => ({
  fetchItems: (options) => dispatch(Actions.requestRepos(username, options))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
