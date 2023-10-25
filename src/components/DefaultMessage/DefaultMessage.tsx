import { FC } from 'react';
import { Message } from './DefaultMessage.styled';
import { IProps } from './DefaultMessage.types';

const EmptyTableMessage: FC<IProps> = ({ message }) => (
  <Message>{message}</Message>
);

export default EmptyTableMessage;
