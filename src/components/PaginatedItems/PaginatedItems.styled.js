import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

export const PaginateContainer = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.primaryGap * 2}px;
  font-family: Jua;
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  & li {
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
    cursor: pointer;
  }
  & li.selected {
    background-color: ${({ theme }) => theme.colors.otherColor};
  }
  & li:hover,
  & li:focus {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
`;
