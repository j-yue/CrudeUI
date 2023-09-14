import { useId, useState, useRef, ReactNode } from "react";
import { styled } from "styled-components";
import { Label } from "./Label";
import { Message } from "./Message";
import { Icon } from "../Icon/Icon";
import CloseIcon from "../Icon/SvgIcons/CloseIcon";
import {
  generateResponsiveFontStyles,
  getDesktopBreakpoint,
  generateResponsiveStyles,
  typeGuard,
} from "../../utilities/styleHelpers";

export interface InputProps {
  /** text for label */
  label: string;
  /** text for message, instructions for filling out field */
  message: string;
  /** error text that appears with meaningful content to user to fix error */
  error: string;
  /** placeholder text */
  placeholder: string;
  /** Decorative icon that precedes input field */
  leadingIcon: ReactNode;
  /** if no inputValue, input is in 'placeholder' state */
  inputValue?: string;
  /** function that takes input value as argument that returns whether or not to reveal error message */
  triggerError: (inputValue: string) => boolean;
}

const InputWrapper = styled.div<{
  $showError: boolean;
}>`
  ${({ theme, $showError }) => {
    const {
      colors,
      border: { small, large },
      screens,
    } = theme;
    const { outline, error, tertiary } = colors;
    const colorError = error[50];

    const thin = typeGuard(small, "default");
    const emphasis = typeGuard(small, "emphasis");

    const cssVariables = `    
      --colorText: ${$showError ? colorError : outline[0]};
      --colorPlaceholder: ${outline[30]};
      --colorBg: ${tertiary[100]};
      --colorBgPlaceholder: ${tertiary[80]};
      --borderWidth: ${thin};
      --borderWidthEmphasis: ${emphasis};
    `;

    const mobileRules = `
      color: var(--colorText);
      min-width: 5rem;
      display: flex;
      flex-flow: column nowrap;
      gap: 0.5rem;
    `;

    const desktopRules = `
      gap: 1rem;
      --borderWidth: ${typeGuard(large, "default")};
      --borderWidthEmphasis: ${typeGuard(large, "emphasis")};
    `;

    return generateResponsiveStyles(
      cssVariables + mobileRules,
      desktopRules,
      screens.large
    );
  }}
`;

const StyledInput = styled.input`
  ${({ theme }) => {
    const { small, large } = theme.typography.title;
    return generateResponsiveFontStyles(
      typeGuard(small, "regular"),
      typeGuard(large, "regular"),
      getDesktopBreakpoint(theme)
    );
  }}
  padding: 0;
  flex: 1;
  background-color: inherit;
`;

const InputContainer = styled.div`
  position: relative;
  padding: 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  outline: var(--borderWidth) solid var(--colorText);
  background-color: var(--colorBg);

  &:focus-within {
    outline-width: var(--borderWidthEmphasis);
  }

  &:hover {
    background-color: var(--colorBgPlaceholder);
  }
`;

const PlainIconButton = styled.button`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const CloseButton = ({ ...props }) => (
  <PlainIconButton {...props}>
    <Icon>
      <CloseIcon />
    </Icon>
  </PlainIconButton>
);

//well it just seems like if input has no value, it is in placeholder mode...
export function Input({
  label = "Label",
  message = "Helper text that can extend up to a maximum of 2 lines",
  error = "Error text that can extend up to a maximum of 2 lines",
  placeholder = "Placeholder",
  leadingIcon,
  inputValue = "",
  triggerError = (_value: string) => _value == label,
}: InputProps) {
  //create unique id for input field for label to be associated with
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const LeadingIcon = () => <Icon>{leadingIcon}</Icon>;

  const [value, setValue] = useState(inputValue);
  const [showError, setShowError] = useState(false);

  const handleChange = (_value: string) => {
    setValue(_value);
    setShowError(triggerError(_value));
  };

  //when clearing value of input, set focus back to input
  const handleClickClose = () => {
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <InputWrapper $showError={showError}>
      {label && <Label inputId={id} text={label} />}
      <InputContainer>
        {leadingIcon && <LeadingIcon />}
        <StyledInput
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          ref={inputRef}
        />
        {value && (
          <CloseButton
            aria-label={`Clear ${label} field`}
            onClick={handleClickClose}
          />
        )}
      </InputContainer>
      {message && <Message text={showError ? error : message} />}
    </InputWrapper>
  );
}
