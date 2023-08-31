import { styled } from "styled-components";
import Text from "../Text/Text";
import { responsiveWrapper } from "../../utilities/styleHelpers";

type LinkProps = {
  /** if true, append children to link */
  trailingIcon: boolean;
  /** link href */
  href: string;
  /** text displayed */
  text: string;
  /** icon to append to link text */
  children?: React.ReactNode;
};

const StyledLink = styled.a`
  ${({
    theme: {
      colors: { primary },
      border: { small },
      screens: { large },
    },
  }) => {
    //use bottom border to simulate text decoration underline so that icon gets underlined as well
    const borderThickness = "default" in small ? small.default : "2px";
    const amethyst = primary[20];
    const darkAmethyst = primary[0];

    return `
      color: ${amethyst};
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      border-bottom: ${borderThickness} solid ${amethyst};
      letter-spacing: 0.05625rem;

      ${responsiveWrapper(large, "letter-spacing: 0.075rem;")}

      &:hover {
        color: ${darkAmethyst};
      }

      &:focus {
        border: ${borderThickness} solid ${darkAmethyst};
      }

      &:active {
        color: ${darkAmethyst};
        border-color: ${darkAmethyst};
        border-width: ${"emphasis" in small ? small.emphasis : "4px"};
      }
    `;
  }}
`;

export default function Link({
  trailingIcon,
  href = "",
  text = "Link",
  children,
}: LinkProps) {
  return (
    <StyledLink href={href}>
      <Text type="subtitle" emphasis="high" text={text} />
      {trailingIcon && children}
    </StyledLink>
  );
}
