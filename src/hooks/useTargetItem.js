import pagesPath from 'constants/pagesPath';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectItems } from 'redux/table/selectors';

const useTargetItem = () => {
  const id = useParams()[pagesPath.dynamicParam];
  const items = useSelector(selectItems);
  if (items.length) {
    return items.find(({ id: contactId }) => contactId === id) ?? {};
  }
};

export default useTargetItem;
