import { FC } from 'react';
import { Title, Message } from './NotFound.styled';

const NotFound: FC = () => (
  <>
    <Title>Not Found</Title>
    <Message>The request URL was not found on this server</Message>
  </>
);

export default NotFound;
