import type { ReactNode, MouseEvent } from "react";
import type {
  ButtonVariant,
  ComponentSize,
  ButtonType,
  InteractiveProps,
} from "../../types/common";
import { Spinner } from "../Spinner";
import "./Button.scss";

export interface ButtonProps extends InteractiveProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ComponentSize;
  type?: ButtonType;
  loadingText?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  ripple?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  type = "button",
  className = "",
  loadingText = "Loading",
  icon,
  iconPosition = "left",
  ripple = true,
}) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    // Ripple effect
    if (ripple) {
      createRipple(e);
    }

    onClick?.(e);
  };

  const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("btn__ripple");

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const baseClass = "btn";
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const fullWidthClass = fullWidth ? "btn--full-width" : "";
  const disabledClass = disabled ? "btn--disabled" : "";
  const loadingClass = loading ? "btn--loading" : "";
  const iconClass = icon ? `btn--icon btn--icon-${iconPosition}` : "";
  const iconOnlyClass = icon && !children ? "btn--icon-only" : "";

  const buttonClasses = [
    baseClass,
    variantClass,
    sizeClass,
    fullWidthClass,
    disabledClass,
    loadingClass,
    iconClass,
    iconOnlyClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const renderIcon = () => {
    if (!icon) return null;

    return <span className="btn__icon">{icon}</span>;
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <Spinner
            size={size === "xs" ? "xs" : size === "sm" ? "sm" : "md"}
            loadingText={loadingText}
            className="btn__spinner"
          />
          <span className="btn__content">{children}</span>
        </>
      );
    }

    if (iconPosition === "left") {
      return (
        <>
          {renderIcon()}
          <span className="btn__content">{children}</span>
        </>
      );
    }

    return (
      <>
        <span className="btn__content">{children}</span>
        {renderIcon()}
      </>
    );
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {renderContent()}
    </button>
  );
};
