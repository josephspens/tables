import button from './button';

export const container = {
  textAlign: "right",
  padding: "0.5em"
};

export const limit = {
  container: {
    padding: container.padding
  }
}

export default {
  container,
  limit,
  button: (enabled) => Object.assign({}, button(enabled), {
    marginRight: "1em",
    fontSize: "0.75em"
  })
};
