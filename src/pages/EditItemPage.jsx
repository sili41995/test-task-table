import EditItem from 'components/EditItem';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tableServiceApi from 'service/tableServiceApi';
import { toasts } from 'utils';

const EditItemPage = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getItem = async (id) => {
      try {
        const response = await tableServiceApi.fetchItemById(id);
        setItem(response);
      } catch (error) {
        toasts.errorToast(error.message);
      }
    };

    getItem(id);
  }, [id]);

  return item && <EditItem item={item} />;
};

export default EditItemPage;
