import { Text } from "../Text/Text";

export interface MessageProps {
  /** message string */
  text: string;
}

export function Message({ text }: MessageProps) {
  return (
    <span aria-live="polite">
      <Text text={text} type="caption" />
    </span>
  );
}
