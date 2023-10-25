import 'react-toastify/dist/ReactToastify.css';
import { FC, useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import EditItem from 'components/EditItem';
import tableServiceApi from 'service/tableServiceApi';
import { toasts } from 'utils';
import { IItem } from 'types/types';

const EditItemPage: FC = () => {
  const [item, setItem] = useState<IItem | null>(null);
  const location = useLocation();
  const prevLocation = useRef(location.state);
  const { id } = useParams();

  useEffect(() => {
    const getItem = async (id: string) => {
      try {
        const response = await tableServiceApi.fetchItemById(id);
        setItem(response);
      } catch (error) {
        if (error instanceof Error) {
          toasts.errorToast(error.message);
        }
      }
    };

    id && getItem(id);
  }, [id]);

  return item && <EditItem item={item} location={prevLocation.current} />;
};

export default EditItemPage;
