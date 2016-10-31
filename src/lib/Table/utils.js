export const getSortableIcon = ({ sortableColumns, sortedColumn, columnId, sortDirection }) => {
  if (!sortableColumns.includes(columnId)) return;
  if (sortedColumn !== columnId) return '&#8645;';
  if (sortDirection === 'ASC') return '&#8593;';
  if (sortDirection === 'DESC') return '&#8595;';
}
