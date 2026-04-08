/**
 * @typedef {Object} ButtonProps
 * @prop {string} to
 * @prop {string} [className='']
 * @prop {React.ReactNode} children
 * @prop {"primary" | "secondary" | "tertiary"} variant
 * @prop {Object} props
 */

import { Link } from "react-router-dom";

/**
 * @param {ButtonProps} props
 * @returns {React.ReactNode}
 */
function Button({ to, children, variant = "primary", className, ...props }) {

    const variants = {
        primary: "bg-yellow-55 text-dark-08 hover:bg-yellow-60 transition-colors",
        secondary: "bg-dark-08 text-white hover:bg-dark-10 transition-colors border border-dark-15",
    };

    const variantClasses = `rounded-md py-2 px-4 ${className} ${variants[variant]}`;

    if (to) {
        return (
            <Link to={to} className={variantClasses} {...props}>
                {children}
            </Link>
        )
    }

    return (
        <button className={variantClasses} {...props}>
            {children}
        </button>
    )
}

export default Button;