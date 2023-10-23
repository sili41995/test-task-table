import styled from '@emotion/styled';

export const Container = styled.div`
  width: 900px;
  flex-shrink: 0;
`;

export const TableContainer = styled.table``;

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

// export const List = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.primaryGap}px;
// `;
