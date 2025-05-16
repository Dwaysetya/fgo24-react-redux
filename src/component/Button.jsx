import React from "react";

/**
 * custom Button implementation with inherit of native button
 *
 * @typedef {object} CustomProps
 * @property {"primary" | "secondary" | "outline" | undefined} [variant]
 *
 * @typedef {CustomProps & React.HTMLAttributes<HTMLDivElement>} ButtonProps
 */

/**
 *
 * @param {ButtonProps} props
 * @returns
 */

function Button({ className, children, ...props }) {
  const baseStyle = "h-12 bg-blue-600 rounded px-5";
  return (
    <button className={[baseStyle, className].join(" ")} {...props}>
      {children}
    </button>
  );
}

export default Button;
