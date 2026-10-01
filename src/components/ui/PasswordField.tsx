"use client";

import { TextField } from "@/components/ui/TextField";

type PasswordFieldProps = Omit<
  React.ComponentProps<typeof TextField>,
  "type" | "trailing"
>;

export function PasswordField({
  id,
  className = "",
  ...props
}: PasswordFieldProps) {
  return (
    <TextField
      id={id}
      className={`[&_input::-ms-reveal]:hidden ${className}`}
      {...props}
      type="password"
    />
  );
}