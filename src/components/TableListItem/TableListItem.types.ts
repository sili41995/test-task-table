import { Theme } from '@emotion/react';
import { IItem } from 'types/types';

export interface IProps {
  item: IItem;
  rowIndex: number;
}

export interface IStyledProps {
  index?: number;
  theme?: Theme;
}
