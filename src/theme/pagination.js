import button from './button';

export const container = {
  textAlign: "right",
  padding: "0.5em"
};

export default {
  container,
  button: (enabled) => Object.assign({}, button(enabled), {
    marginRight: "1em",
    fontSize: "0.75em"
  })
};
