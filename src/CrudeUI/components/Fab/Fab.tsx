import { Button } from "../Button/Button";
import AddIcon from "../Icon/SvgIcons/AddIcon";
import { variant, icon, size, genericFunction } from "../../types";

export interface FabProps {
  /** button size */
  size?: size;
  /** color of button */
  variant?: variant;
  /** icon to render on button */
  icon: icon;
  /** onClick handler */
  handleClick: genericFunction;
}

export function Fab({
  size = "sm",
  variant = "primary",
  icon = <AddIcon />,
  handleClick,
}: FabProps) {
  return (
    <Button
      size={size}
      variant={variant}
      iconPosition="leading"
      icon={icon}
      state="default"
      handleClick={handleClick}
    >
      {null}
    </Button>
  );
}
