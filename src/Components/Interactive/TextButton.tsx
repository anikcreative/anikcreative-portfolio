import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme/Theme";

interface TextButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  ref?: React.RefObject<HTMLButtonElement>;
}
export const TextButton: React.FC<TextButtonProps> = (props: TextButtonProps): JSX.Element => {
  const { className, ref, ...rest } = props;

  const renderClassName = (): string => {
    return `${className} btn btn-text`;
  }

  return (
    <StyledButton
      {...rest}
      className={renderClassName()}
      ref={props.ref}
    />
  );
}
export default TextButton;


const StyledButton = styled.button`
  position: relative;

  background: none;
  border: none;
  box-shadow: none;
  color: ${Colors.white};
  outline: none;

  &:active,
  &:focus {
    outline: none;
  }
`;