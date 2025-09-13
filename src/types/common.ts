import type { ReactNode } from "react";

// Common props that are shared across multiple components
export interface BaseComponentProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

// Interactive component props
export interface InteractiveProps extends BaseComponentProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

// Form component props
export interface FormComponentProps extends BaseComponentProps {
  name?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}

// Size variants
export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl";

// Common variants
export type CommonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "ghost";

// Button specific variants
export type ButtonVariant = CommonVariant;

// Input specific variants
export type InputVariant = "outlined" | "filled" | "ghost";

// Badge specific variants
export type BadgeVariant = CommonVariant | "info" | "light" | "dark";

// Button types
export type ButtonType = "button" | "submit" | "reset";

// Input types
export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "search";
