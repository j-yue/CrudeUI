type BorderThickness = "default" | "emphasis";

type Border = {
  [Thickness in BorderThickness]: string;
};

export const borderSm: Border = {
  default: "2px",
  emphasis: "4px",
};

export const borderLg: Border = {
  default: "4px",
  emphasis: "6px",
};
