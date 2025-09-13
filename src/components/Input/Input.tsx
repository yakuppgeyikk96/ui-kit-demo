import type { ChangeEvent, FocusEvent, ReactNode } from "react";
import type { ComponentSize, InteractiveProps } from "../../types/common";

import "./Input.scss";

export interface InputProps
  extends Omit<InteractiveProps, "onFocus" | "onBlur"> {
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  size?: ComponentSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode; // Sağ icon
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  className = "",
  leftIcon,
  rightIcon,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value, e);
  };

  const baseClass = "input";
  const sizeClass = `input--${size}`;
  const fullWidthClass = fullWidth ? "input--full-width" : "";
  const disabledClass = disabled ? "input--disabled" : "";
  const loadingClass = loading ? "input--loading" : "";
  const leftIconClass = leftIcon ? "input--left-icon" : "";
  const rightIconClass = rightIcon ? "input--right-icon" : "";

  const inputClasses = [
    baseClass,
    sizeClass,
    fullWidthClass,
    disabledClass,
    loadingClass,
    leftIconClass,
    rightIconClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="input-wrapper">
      {leftIcon && (
        <span className={`${sizeClass} input__left-icon`}>{leftIcon}</span>
      )}
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled || loading}
      />
      {rightIcon && (
        <span className={`${sizeClass} input__right-icon`}>{rightIcon}</span>
      )}
    </div>
  );
};
