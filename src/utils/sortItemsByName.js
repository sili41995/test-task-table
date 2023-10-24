import sortTypes from 'constants/sortTypes';

const sortItemsByName = (items, sortType) => {
  return items.toSorted(({ name: prevItem }, { name: nextItem }) =>
    sortType === sortTypes.DESC_SORT_TYPE
      ? nextItem.localeCompare(prevItem)
      : prevItem.localeCompare(nextItem)
  );
};

export default sortItemsByName;
