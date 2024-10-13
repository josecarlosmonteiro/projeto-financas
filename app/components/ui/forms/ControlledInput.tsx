import { InputHTMLAttributes } from "react";
import { Control, Controller, FieldValue, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<FieldValue<T>>;
  name: Path<FieldValue<T>>;
}

export function ControlledInput<T extends FieldValues>({ className, control, name, ...rest }: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          className={`p-1 border-b-2 ${className}`}
          {...field}
          {...rest}
        />
      )}
    />
  )
}