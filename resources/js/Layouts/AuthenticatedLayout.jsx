import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { Button, StyledEngineProvider } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CgMenuLeftAlt } from "react-icons/cg";
import { MdOutlineAccountCircle, MdOutlineNotifications } from "react-icons/md";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    // get the system theme
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark" // dark mode
        : "light"; // light mode

    const currTheme = createTheme({
        palette: {
            mode: systemTheme,
        },
    });

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={currTheme}>
                <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                    <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                        <div className="flex px-3 py-2 justify-between">
                            <div className="flex items-center pe-4">
                                <button>
                                    <CgMenuLeftAlt className="dark:text-white text-xl" />
                                </button>
                            </div>

                            <Link href="/">
                                <div className="flex items-center">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200 me-1" />
                                    <span className="dark:text-gray-200">
                                        PROGANTARA
                                    </span>
                                </div>
                            </Link>

                            <div className="flex items-center ml-auto">
                                <button>
                                    <MdOutlineNotifications className="dark:text-white text-2xl me-2" />
                                </button>
                                <button>
                                    <MdOutlineAccountCircle className="dark:text-white text-2xl" />
                                </button>
                            </div>
                        </div>
                    </nav>

                    {header && (
                        <header className="bg-white dark:bg-gray-800 shadow">
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                {header}
                            </div>
                        </header>
                    )}

                    <main>{children}</main>
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
