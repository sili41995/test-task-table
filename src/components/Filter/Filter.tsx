import {
  ChangeEvent,
  FC,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IoMdClose } from 'react-icons/io';
import { BsSortAlphaDown } from 'react-icons/bs';
import { BsSortAlphaDownAlt } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import { FilterContainer } from './Filter.styled';
import { makeBlur, updateSortSearchParams } from 'utils';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import iconBtnType from 'constants/iconBtnType';
import { FormType } from 'constants/formType';
import { SearchParamsKeys } from 'constants/searchParamsKeys';
import { SortTypes } from 'constants/sortTypes';

const Filter: FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const filter = searchParams.get(SearchParamsKeys.FILTER_SP_KEY) ?? '';
  const deskSortType =
    searchParams.get(SearchParamsKeys.SORT_SP_KEY) === SortTypes.DESC_SORT_TYPE;

  useEffect(() => {
    if (!showFilter) {
      searchParams.delete(SearchParamsKeys.FILTER_SP_KEY);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, showFilter]);

  useEffect(() => {
    if (filter) {
      setShowFilter(true);
    }
  }, [filter]);

  const onSortBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
    updateSortSearchParams(
      searchParams,
      setSearchParams,
      SearchParamsKeys.SORT_SP_KEY
    );
  };

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    value
      ? searchParams.set(SearchParamsKeys.FILTER_SP_KEY, value)
      : searchParams.delete(SearchParamsKeys.FILTER_SP_KEY);
    setSearchParams(searchParams);
  };

  const onFilterBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
    setShowFilter((showFilter) => !showFilter);
  };

  const onClearFilterBtnClick = () => {
    searchParams.delete(SearchParamsKeys.FILTER_SP_KEY);
    setSearchParams(searchParams);
  };

  return (
    <FilterContainer>
      {showFilter && (
        <Input
          ref={inputRef}
          type='text'
          value={filter}
          onChange={onFilterChange}
          inputType={FormType.filter}
          autoFocus
          inputWrap
          children={filter && <IoMdClose />}
          btnType={iconBtnType.clearFilter}
          action={onClearFilterBtnClick}
        />
      )}
      <IconButton
        btnType={iconBtnType.filter}
        iconSize={28}
        width={44}
        onBtnClick={onFilterBtnClick}
      >
        <FiFilter />
      </IconButton>
      <IconButton
        btnType={iconBtnType.filter}
        iconSize={28}
        width={44}
        onBtnClick={onSortBtnClick}
      >
        {deskSortType ? <BsSortAlphaDown /> : <BsSortAlphaDownAlt />}
      </IconButton>
    </FilterContainer>
  );
};

export default Filter;
