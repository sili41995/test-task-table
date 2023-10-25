import { SearchParamsKeys } from 'constants/searchParamsKeys';
import { SortTypes } from 'constants/sortTypes';

const updateSortSearchParams = (
  searchParams: URLSearchParams,
  setSearchParams: Function,
  key: SearchParamsKeys
) => {
  const sortSearchParam = searchParams.get(key);
  const deskSortType = sortSearchParam === SortTypes.DESC_SORT_TYPE;
  const updateSortValue = deskSortType
    ? SortTypes.ASC_SORT_TYPE
    : SortTypes.DESC_SORT_TYPE;
  searchParams.set(key, updateSortValue);
  setSearchParams(searchParams);
};

export default updateSortSearchParams;
