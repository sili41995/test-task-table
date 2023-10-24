import EditItem from 'components/EditItem';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import tableServiceApi from 'service/tableServiceApi';
import { toasts } from 'utils';

const EditItemPage = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const prevLocation = useRef(location.state);

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

  return item && <EditItem item={item} location={prevLocation.current} />;
};

export default EditItemPage;
