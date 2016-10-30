import { primaryColor, textColor } from './config';

export const defaultButton = {
  padding: "0.4em 1em",
  display: "inline-block",
  backgroundColor: primaryColor,
  boxShadow: "none",
  border: "none",
  color: textColor,
  borderRadius: "3px",
  lineHeight: 1,
  cursor: "pointer"
};

export const disabledState = {
  color: primaryColor,
  backgroundColor: textColor,
  cursor: "not-allowed"
};

export default (enabled) => Object.assign({}, defaultButton, (!!enabled ? {} : disabledState));
