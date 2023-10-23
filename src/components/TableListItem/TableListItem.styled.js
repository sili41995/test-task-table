import styled from '@emotion/styled';

export const Row = styled.tr`
  background-color: ${({ index, theme }) =>
    index % 2 !== 0 ? theme.colors.lightgreyColor : theme.colors.whiteColor};
  cursor: pointer;
`;

export const Data = styled.td`
  padding: ${({ theme }) => theme.spacing(4)};
  text-align: center;
`;
