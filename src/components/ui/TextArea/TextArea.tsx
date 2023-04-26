import type { TextareaProps } from "@mantine/core";
import { Textarea as MantineTextArea } from "@mantine/core";
import { forwardRef } from "react";

/**
 * @package
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => <MantineTextArea ref={ref} {...props} />
);

TextArea.displayName = "TextArea";
