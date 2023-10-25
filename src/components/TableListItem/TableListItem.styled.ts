import styled from '@emotion/styled';
import { IStyledProps } from './TableListItem.types';

export const Row = styled.tr`
  background-color: ${({ index, theme }: IStyledProps) =>
    (index as number) % 2 !== 0
      ? theme?.colors.lightgreyColor
      : theme?.colors.whiteColor};
  cursor: pointer;
`;

export const Data = styled.td`
  padding: ${({ theme }) => theme.spacing(4)};
  text-align: center;
`;
