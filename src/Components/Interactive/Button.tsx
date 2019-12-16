import React from "react";
import styled from "styled-components";
import { Colors, reduceColorOpacity } from "../../theme/Theme";

type ButtonImportance = "primary" | "secondary" | "tertiary";
interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, StyledButtonProps {
  ref?: React.RefObject<HTMLButtonElement>;
}
export const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const { className, importance, ref, ...rest } = props;

  const renderClassName = (): string => {
    return `${className} btn btn-${importance}`;
  }

  return (
    <StyledButton
      {...rest}
      className={renderClassName()}
      ref={props.ref}
      importance={importance}
    />
  );
}
export default Button;

interface StyledButtonProps {
  importance: ButtonImportance;
  margin?: "left" | "right";
}
const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  margin-top: 8px;
  margin-right: ${props => props.margin === "right" ? 16 : 0}px;
  margin-bottom: 4px;
  margin-left: ${props => props.margin === "left" ? 16 : 0}px;
  padding: 12px 20px;

  background: ${props => props.importance === "primary" ?
    Colors.accent : "transparent"};
  border: 1px solid ${Colors.accent};
  box-shadow: 0 0 0 0 ${reduceColorOpacity(Colors.accent, 0.7)};
  opacity: 0.9;

  font-size: ${props => props.importance === "tertiary" ?
    1.3 : 1.4}rem;
  font-weight: 600;
  color: ${props => props.importance === "primary" ?
    Colors.white : Colors.accent};
  text-transform: ${props => props.importance === "tertiary" ?
    "none" : "uppercase"};
  letter-spacing: 0.04rem;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 1px 4px ${reduceColorOpacity(Colors.accent, 0.7)};
    opacity: 1.0;

    text-shadow: 0 0 3px ${props => reduceColorOpacity(
      (props.importance === "primary" ?
        Colors.white :
        Colors.accent),
      0.65)
    };
  }
`;