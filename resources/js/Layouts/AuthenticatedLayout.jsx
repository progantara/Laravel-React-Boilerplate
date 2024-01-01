import { createContext, useEffect, useState } from "react";

import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Navbar from "./Partials/Navbar";
import Sidebar from "./Partials/Sidebar";

export const LayoutCtx = createContext();

export default function Authenticated({ user, header, children }) {
    // get width of the window
    const [width, setWidth] = useState(window.innerWidth);

    // set showing navigation dropdown false if width is less than 1024
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(
        width < 1024 ? false : true
    );

    // get the system theme
    let systemTheme = "";
    if (localStorage.getItem("theme") === null) {
        systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    } else {
        systemTheme = localStorage.getItem("theme");
    }

    const [theme, setTheme] = useState(systemTheme);

    const currTheme = createTheme({
        palette: {
            mode: theme,
        },
    });

    // use effect to handle the window resize
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setShowingNavigationDropdown(
                window.innerWidth < 1024 ? false : true
            );
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // use effect to handle the theme change
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <LayoutCtx.Provider
            value={{
                theme,
                setTheme,
                showingNavigationDropdown,
                setShowingNavigationDropdown,
            }}
        >
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={currTheme}>
                    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                        {/** Navigation */}
                        <Navbar />

                        <main
                            className={
                                showingNavigationDropdown && width < 1024
                                    ? "mt-[53px] lg:flex before:fixed before:w-full before:h-full before:bg-[rgba(41,43,48,0.5)] before:z-[9] before:left-0 before:top-0"
                                    : "mt-[53px] lg:flex"
                            }
                        >
                            <div
                                className={
                                    "transition-all duration-[0.3s] ease-[ease-in-out] fixed top-[52px] w-[250px] p-5 bg-white dark:bg-gray-800 dark:text-white border-r border-gray-100 dark:border-gray-700 min-h-screen z-10 " +
                                    (showingNavigationDropdown
                                        ? "left-[0px]"
                                        : "left-[-270px]")
                                }
                            >
                                {/** Sidebar */}
                                <Sidebar />
                            </div>

                            <div
                                className={
                                    "relative transition-all duration-[.3s] delay-100 " +
                                    (showingNavigationDropdown
                                        ? "left-[0px] lg:left-[250px] w-full lg:w-[calc(100%-250px)]"
                                        : "left-[0px] w-full")
                                }
                            >
                                {header && (
                                    <header className="">
                                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                            {header}
                                        </div>
                                    </header>
                                )}

                                <div className="page">{children}</div>
                            </div>
                        </main>
                    </div>
                </ThemeProvider>
            </StyledEngineProvider>
        </LayoutCtx.Provider>
    );
}
