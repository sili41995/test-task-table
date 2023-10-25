import { SortTypes } from 'constants/sortTypes';
import { IItem } from 'types/types';

const sortItemsByName = (items: IItem[], sortType: string) => {
  return [...items].sort(({ name: prevItem }, { name: nextItem }) =>
    sortType === SortTypes.DESC_SORT_TYPE
      ? nextItem.localeCompare(prevItem)
      : prevItem.localeCompare(nextItem)
  );
};

export default sortItemsByName;
