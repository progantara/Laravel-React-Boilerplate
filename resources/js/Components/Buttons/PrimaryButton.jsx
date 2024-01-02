import { Button } from "@mui/material";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <Button
            {...props}
            className={
                `bg-primary hover:bg-primary-500 text-white dark:bg-white dark:hover:bg-gray-300 dark:text-black ` +
                className
            }
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
