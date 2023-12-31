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
                    "flex items-center mb-5 rounded p-2 hover:bg-gray-500 " +
                    (active ? "bg-gray-500" : "") +
                    className
                }
            >
                {children}
            </div>
        </Link>
    );
}
