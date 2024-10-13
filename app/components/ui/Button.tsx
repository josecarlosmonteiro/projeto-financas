import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className, ...rest }: Props) {
  return (
    <button
      className={`p-2 px-4 bg-slate-100 border rounded ${className}`}
      {...rest}
    />
  )
}