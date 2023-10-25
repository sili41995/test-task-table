import { ChangeEvent, ReactElement, ReactNode } from 'react';
import { FormType } from 'constants/formType';
import IconBtnType from 'constants/iconBtnType';

export interface IProps {
  title?: string;
  pattern?: string;
  value?: string;
  defaultValue?: string;
  fieldIcon?: ReactElement;
  settings?: object;
  inputWrap: boolean;
  btnType?: IconBtnType;
  children?: ReactNode;
  right?: number;
  position?: string;
  type?: string;
  placeholder?: string;
  autoFocus?: boolean;
  fieldIconSize?: number;
  inputType?: FormType;
  action?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  fieldIconSize?: number;
  inputType?: FormType;
}
