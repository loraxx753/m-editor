import React, { ReactNode } from "react";
import { Button as MaterialButton, ButtonProps as MaterialButtonProps } from "@mui/material";

interface ButtonProps {
    size?: "small" | "medium" | "large";
    variant?: "text" | "outlined" | "contained";
    color?: "inherit" | "error" | "primary" | "secondary" | "success" | "info" | "warning";
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ size, variant, color, children }) => {
    return (
        <MaterialButton size={size} variant={variant} color={color}>
            {children}
        </MaterialButton>
    );
};

export default Button