import { IItem } from 'types/types';

const filterItemsByName = (items: IItem[], filter: string) =>
  filter
    ? items.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : items;

export default filterItemsByName;
