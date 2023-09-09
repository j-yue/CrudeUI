import Border from "../Border/Border";
import Shadow from "../Shadow/Shadow";
import { Elevation, Thickness } from "../../types";

//compound component combining Border and Shadow components

interface BorderShadowProps {
  elevation: Elevation;
  thickness: Thickness;
  children: React.ReactNode;
}

export default function BorderShadow({
  elevation,
  thickness,
  children,
}: BorderShadowProps) {
  return (
    <Shadow elevation={elevation}>
      <Border thickness={thickness}>{children}</Border>
    </Shadow>
  );
}
