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
import sortTypes from 'constants/sortTypes';
import searchParamsKeys from 'constants/searchParamsKeys';
import iconBtnType from 'constants/iconBtnType';
import { FormType } from 'constants/formType';

const Filter: FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const { DESC_SORT_TYPE } = sortTypes;
  const { FILTER_SP_KEY, SORT_SP_KEY } = searchParamsKeys;
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const deskSortType = searchParams.get(SORT_SP_KEY) === DESC_SORT_TYPE;

  useEffect(() => {
    if (!showFilter) {
      searchParams.delete(FILTER_SP_KEY);
      setSearchParams(searchParams);
    }
  }, [FILTER_SP_KEY, searchParams, setSearchParams, showFilter]);

  useEffect(() => {
    if (filter) {
      setShowFilter(true);
    }
  }, [filter]);

  const onSortBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
    updateSortSearchParams(searchParams, setSearchParams, SORT_SP_KEY);
  };

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    value
      ? searchParams.set(FILTER_SP_KEY, value)
      : searchParams.delete(FILTER_SP_KEY);
    setSearchParams(searchParams);
  };

  const onFilterBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
    setShowFilter((showFilter) => !showFilter);
  };

  const onClearFilterBtnClick = () => {
    searchParams.delete(FILTER_SP_KEY);
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
