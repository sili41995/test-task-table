const filterItemsByName = (items, filter) =>
  filter
    ? items.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : items;

export default filterItemsByName;
