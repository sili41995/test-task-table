import EditItem from 'components/EditItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoaded } from 'redux/table/selectors';

const EditItemPage = () => {
  const isLoaded = useSelector(selectIsLoaded);

  return isLoaded && <EditItem />;
};

export default EditItemPage;
