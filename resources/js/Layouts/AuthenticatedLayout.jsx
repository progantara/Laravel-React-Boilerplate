import { useEffect, useRef, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { Button, StyledEngineProvider } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CgChevronDown, CgLogOff, CgMenu, CgProfile } from "react-icons/cg";
import {
    MdOutlineAccountCircle,
    MdOutlineNotifications,
    MdDashboard,
} from "react-icons/md";
import { FaUser } from "react-icons/fa";
import SideLink from "@/Components/Links/SideLink";
import SideLinks from "@/Components/Links/SideLinks";

export default function Authenticated({ user, header, children }) {
    // get width of the window
    const [width, setWidth] = useState(window.innerWidth);
    const windowWidth = useRef(window.innerWidth);

    // set showing navigation dropdown false if width is less than 1024
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(
        width < 1024 ? false : true
    );

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

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={currTheme}>
                <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                    {/** Navigation */}
                    <nav className="fixed top-0 w-full z-10 px-5 bg-white shadow dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                        <div className="flex px-3 py-2 justify-between">
                            <Link href="/">
                                <div className="flex items-center">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200 me-1 lg:ms-" />
                                    <span className="hidden md:flex dark:text-gray-200">
                                        PROGANTARA
                                    </span>
                                </div>
                            </Link>

                            <div className="flex items-center ps-4">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (showingNavigationDropdown) =>
                                                !showingNavigationDropdown
                                        )
                                    }
                                >
                                    <CgMenu className="bg-gray-100 dark:bg-gray-700 p-1 rounded-full dark:text-white text-3xl hover:text-primary" />
                                </button>
                            </div>

                            <div className="flex items-center ml-auto">
                                <span className="relative inline-flex me-2">
                                    <button>
                                        <MdOutlineNotifications className="bg-gray-100 dark:bg-gray-700 p-1 rounded-full dark:text-white text-3xl hover:text-primary" />
                                    </button>
                                    <span className="flex absolute h-3 w-3 top-0 left-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                    </span>
                                </span>

                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button>
                                            <MdOutlineAccountCircle className="dark:text-white text-3xl hover:text-primary me-3" />
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content
                                        className="w-48"
                                        align="right"
                                    >
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                            className="w-full text-left"
                                        >
                                            <div className="flex items-center">
                                                <FaUser />
                                                <span className="ml-2">
                                                    Profile
                                                </span>
                                            </div>
                                        </Dropdown.Link>
                                        <hr />
                                        <Dropdown.Link
                                            as="button"
                                            method="post"
                                            href="/logout"
                                            className="w-full text-left"
                                        >
                                            <div className="flex items-center">
                                                <CgLogOff />
                                                <span className="ml-2">
                                                    Log Out
                                                </span>
                                            </div>
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </nav>

                    <main
                        className={
                            showingNavigationDropdown && width < 1024
                                ? "mt-[53px] lg:flex before:fixed before:w-full before:h-full before:bg-[rgba(41,43,48,0.5)] before:z-[9] before:left-0 before:top-0"
                                : "mt-[53px] lg:flex"
                        }
                    >
                        <div
                            className={
                                showingNavigationDropdown
                                    ? "left-[0px] transition-all duration-[0.3s] ease-[ease-in-out] fixed top-[52px] w-[250px] p-5 bg-white dark:bg-gray-800 dark:text-white border-r border-gray-100 dark:border-gray-700 min-h-screen z-10"
                                    : "left-[-270px] transition-all duration-[0.3s] ease-[ease-in-out] fixed top-[52px] w-[250px] p-5 bg-white dark:bg-gray-800 dark:text-white border-r border-gray-100 dark:border-gray-700 min-h-screen z-10"
                            }
                        >
                            {/** Sidebar */}
                            <ul className="text-sm">
                                <li>
                                    <SideLinks>
                                        <SideLinks.Trigger>
                                            <div className="flex items-center text-md">
                                                <MdDashboard className="me-2" />
                                                <span>Dashboard</span>
                                            </div>
                                        </SideLinks.Trigger>
                                        <SideLinks.Content>
                                            <li>
                                                <SideLink
                                                    href={route(
                                                        "dashboard.finance"
                                                    )}
                                                    active={route().current(
                                                        "dashboard.finance"
                                                    )}
                                                    className="mb-1"
                                                >
                                                    Finance
                                                </SideLink>
                                            </li>
                                            <li>
                                                <SideLink
                                                    href={route(
                                                        "dashboard.analytic"
                                                    )}
                                                    active={route().current(
                                                        "dashboard.analytic"
                                                    )}
                                                    className="mb-1"
                                                >
                                                    Analytic
                                                </SideLink>
                                            </li>
                                        </SideLinks.Content>
                                    </SideLinks>
                                </li>
                                <div className="bg-white dark:bg-gray-900 text-lg mt-4 mb-2 rounded">
                                    <div className="p-2 ">APPS</div>
                                </div>
                                <li>
                                    <SideLink
                                        href={route("profile.edit")}
                                        active={route().current("profile.edit")}
                                    >
                                        <div className="flex items-center text-md">
                                            <CgProfile className="me-2" />
                                            <span>Profile</span>
                                        </div>
                                    </SideLink>
                                </li>
                            </ul>
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
    );
}
