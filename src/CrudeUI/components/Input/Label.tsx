import { Text } from "../Text/Text";

export interface LabelProps {
  /** id of input field label is associated with */
  inputId: string;
  /** label text */
  text: string;
}

export function Label({ text, inputId }: LabelProps) {
  return (
    <label htmlFor={inputId}>
      <Text text={text} type="subtitle" />
    </label>
  );
}
