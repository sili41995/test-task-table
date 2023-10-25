import { forwardRef } from 'react';
import { Container, StyledInput } from './Input.styled';
import IconButton from 'components/IconButton';
import { IProps } from './Input.types';


const Input = forwardRef<HTMLInputElement, IProps>(
  (
    {
      fieldIcon,
      settings,
      inputWrap,
      btnType,
      children,
      action,
      right = 0,
      fieldIconSize = 18,
      ...props
    },
    ref
  ) => {
    const input = <StyledInput ref={ref} {...settings} {...props} />;
    const inputWithWrap = (
      <Container {...props}>
        {input}
        {fieldIcon}
        {btnType && (
          <IconButton
            top='center'
            right={right}
            position='absolute'
            btnType={btnType}
            width={44}
            height={35}
            onBtnClick={action}
            inputWrap
          >
            {children}
          </IconButton>
        )}
      </Container>
    );

    return inputWrap ? inputWithWrap : input;
  }
);

export default Input;
