import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== VARIANT STORIES =====

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    children: "Error Button",
    variant: "error",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

// ===== SIZE STORIES =====

export const ExtraSmall: Story = {
  args: {
    children: "XS Button",
    size: "xs",
    variant: "primary",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
    variant: "primary",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "md",
    variant: "primary",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
    variant: "primary",
  },
};

export const ExtraLarge: Story = {
  args: {
    children: "XL Button",
    size: "xl",
    variant: "primary",
  },
};

// ===== STATE STORIES =====

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    variant: "primary",
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    variant: "primary",
    fullWidth: true,
  },
};

// ===== TYPE STORIES =====

export const Submit: Story = {
  args: {
    children: "Submit Button",
    variant: "primary",
    type: "submit",
  },
};

export const Reset: Story = {
  args: {
    children: "Reset Button",
    variant: "secondary",
    type: "reset",
  },
};

// ===== COMBINATION STORIES =====

export const LargeSuccess: Story = {
  args: {
    children: "Large Success Button",
    variant: "success",
    size: "lg",
  },
};

export const SmallGhostDisabled: Story = {
  args: {
    children: "Small Ghost Disabled",
    variant: "ghost",
    size: "sm",
    disabled: true,
  },
};

export const LoadingSecondary: Story = {
  args: {
    children: "Loading Secondary",
    variant: "secondary",
    loading: true,
  },
};

// ===== ICON STORIES =====

export const WithLeftIcon: Story = {
  args: {
    children: "Add Item",
    variant: "primary",
    icon: "➕",
    iconPosition: "left",
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Download",
    variant: "success",
    icon: "⬇️",
    iconPosition: "right",
  },
};

export const IconOnly: Story = {
  args: {
    children: "",
    variant: "primary",
    icon: "⭐",
    iconPosition: "left",
  },
};

export const IconOnlySmall: Story = {
  args: {
    children: "",
    variant: "secondary",
    size: "sm",
    icon: "➕",
    iconPosition: "left",
  },
};

export const IconOnlyLarge: Story = {
  args: {
    children: "",
    variant: "success",
    size: "lg",
    icon: "",
    iconPosition: "left",
  },
};

export const IconWithLoading: Story = {
  args: {
    children: "Upload",
    variant: "primary",
    icon: "",
    iconPosition: "left",
    loading: true,
    loadingText: "Uploading...",
  },
};

export const IconVariants: Story = {
  args: {
    children: "Button with Icon",
    variant: "primary",
    icon: "⭐",
    iconPosition: "left",
  },
};

// ===== ICON COMBINATIONS =====

export const SmallIconButton: Story = {
  args: {
    children: "Small Icon",
    variant: "secondary",
    size: "sm",
    icon: "",
    iconPosition: "left",
  },
};

export const LargeIconButton: Story = {
  args: {
    children: "Large Icon",
    variant: "success",
    size: "lg",
    icon: "",
    iconPosition: "right",
  },
};

export const GhostIconButton: Story = {
  args: {
    children: "Ghost Icon",
    variant: "ghost",
    icon: "",
    iconPosition: "left",
  },
};

export const WithRipple: Story = {
  args: {
    children: "Click for Ripple Effect",
    variant: "primary",
    ripple: true,
  },
};

export const WithoutRipple: Story = {
  args: {
    children: "No Ripple Effect",
    variant: "secondary",
    ripple: false,
  },
};
