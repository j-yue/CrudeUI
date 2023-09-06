import Text from "../Text/Text";

interface MessageProps {
  /** message string */
  text: string;
}

export default function Message({ text }: MessageProps) {
  return (
    <span aria-live="polite">
      <Text text={text} type="caption" />
    </span>
  );
}
