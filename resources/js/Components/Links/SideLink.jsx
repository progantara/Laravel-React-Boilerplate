import { Link } from "@inertiajs/react";

export default function SideLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link {...props}>
            <div
                className={
                    "flex items-center justify-between rounded p-2 hover:bg-gray-100 hover:text-primary dark:hover:text-white dark:hover:bg-gray-500 " +
                    (active
                        ? "bg-gray-100 text-primary dark:text-white dark:bg-gray-500 "
                        : "") +
                    className
                }
            >
                {children}
            </div>
        </Link>
    );
}
