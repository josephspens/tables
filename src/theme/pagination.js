import { primaryColor, textColor } from './config';
import button from './button';

export const container = {
  textAlign: "center",
  padding: "0.5em"
};

export const limit = {
  container: {
    padding: container.padding,
    marginRight: "1em"
  },
  dropdown: {
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    padding: button().padding,
    border: "none",
    backgroundColor: primaryColor,
    color: textColor,
    fontSize: "0.7em",
    marginRight: "0.5em"
  }
}

export default {
  container,
  limit,
  button: (enabled) => {
    return Object.assign({}, button(!!enabled), {
      marginRight: "1em",
      fontSize: "0.75em"
    });
  }
};
