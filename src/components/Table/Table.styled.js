import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableContainer = styled.table`
  width: 100%;
`;

export const Head = styled.thead`
  & tr {
    background-color: ${({ theme }) => theme.colors.otherColor};
  }
`;

export const Body = styled.tbody``;

export const Row = styled.tr`
  background-color: ${({ index, theme }) =>
    index % 2 !== 0 ? theme.colors.greyColor : theme.colors.whiteColor};
`;

export const Header = styled.th`
  padding: ${({ theme }) => theme.spacing(4)};
`;
