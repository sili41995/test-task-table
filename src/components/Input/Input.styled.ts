import styled from '@emotion/styled';
import {
  setInputHeight,
  setInputBorderColor,
  setInputBorderRadius,
  setInputPadding,
  setInputFontColor,
  setInputFontSize,
} from 'utils';
import { IStyledProps } from './Input.types';
import { FormType } from 'constants/formType';

export const Container = styled.div`
  position: relative;
  & > svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    display: block;
    width: ${({ fieldIconSize }: IStyledProps) => fieldIconSize}px;
    height: ${({ fieldIconSize }) => fieldIconSize}px;
    color: ${({ theme }) => theme.colors.greyColor};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: ${({ inputType }: IStyledProps) => setInputHeight(inputType)};
  background-color: transparent;
  border: 1px solid ${({ inputType }) => setInputBorderColor(inputType)};
  border-radius: ${({ inputType }) => setInputBorderRadius(inputType)}px;
  padding: ${({ inputType }) => setInputPadding(inputType)};
  font-family: Inter;
  color: ${({ inputType }) => setInputFontColor(inputType)};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  font-size: ${({ inputType }) => setInputFontSize(inputType)}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:focus {
    outline: none;
    border-color: ${({ theme, inputType }) =>
      inputType === FormType.filter ? false : theme.colors.primaryColor};
  }
  &:focus + svg {
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;
