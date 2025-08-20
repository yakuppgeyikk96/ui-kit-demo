import type { ComponentSize } from "../../types/common";
import "./Spinner.scss";

export interface SpinnerProps {
  size?: ComponentSize;
  color?: string;
  loadingText?: string;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "currentColor",
  loadingText = "Loading",
  className = "",
}) => {
  const baseClass = "spinner";
  const sizeClass = `spinner--${size}`;

  const spinnerClasses = [baseClass, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={spinnerClasses} role="status" aria-label={loadingText}>
      <svg className="spinner__svg" viewBox="0 0 24 24" style={{ color }}>
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          className="spinner__circle"
        />
      </svg>
      <span className="sr-only">{loadingText}...</span>
    </div>
  );
};
