import { connect } from 'react-redux';
import Table from '../../components/Table';

const mapStateToProps = (state) => {
  const { characters } = state;
  return { items: characters };
}

const mapDispatchToProps = (dispatch, { fetchAction }) => {

  return {
    fetchItems: () => dispatch(fetchAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
