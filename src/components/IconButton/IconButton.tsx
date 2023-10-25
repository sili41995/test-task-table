import { FC } from 'react';
import { Button } from './IconButton.styled';
import { IProps } from './IconButton.types';
import { BtnType } from 'constants/btnType';

const IconButton: FC<IProps> = ({
  children,
  type = BtnType.button,
  onBtnClick,
  ...props
}) => (
  <Button type={type} onClick={onBtnClick} {...props}>
    {children}
  </Button>
);

export default IconButton;
