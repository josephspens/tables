import { primaryColor, textColor } from './config';
import pagination from './pagination';

export const table = {
  width: "100%",
  textAlign: "left",
  boxShadow: "0 2px 6px -2px"
};

export const tableHead = {
  backgroundColor: primaryColor,
  color: textColor
};

export const tableCell = {
  padding: "0.5em 1em"
};

export default {
  table,
  tableHead,
  tableCell,
  pagination
};
