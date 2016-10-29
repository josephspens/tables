import { connect } from 'react-redux';

import Table from '../../lib/Table';
import * as Actions from '../../actions/repos';

export const mapStateToProps = (state) => {
  const items = state.repos;
  const columns = [
    { name: 'Name', id: 'name' },
    { name: 'Forks', id: 'forks' }
  ];
  return { items, columns };
}

export const mapDispatchToProps = (dispatch, { username }) => ({
  fetchItems: () => dispatch(Actions.requestRepos(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
