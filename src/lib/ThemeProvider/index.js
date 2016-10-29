import { Component, PropTypes, Children } from 'react';

export default class ThemeProvider extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired
  }

  static childContextTypes = {
    theme: PropTypes.object.isRequired
  }

  getChildContext() {
    return { theme: this.props.theme };
  }

  render() {
    return Children.only(this.props.children);
  }
}
