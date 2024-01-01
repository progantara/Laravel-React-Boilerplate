import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { useContext, useEffect, useState } from "react";
import { CgLogOff, CgMenu } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineNotifications } from "react-icons/md";
import { LayoutCtx } from "@/Layouts/AuthenticatedLayout";
import Dropdown from "@/Components/Dropdown";
import { Switch } from "@mui/material";
import DarkSwitch from "@/Components/Switchs/DarkSwitch";

export default function Navbar() {
    const { theme, setTheme, showingNavigationDropdown, setShowingNavigationDropdown } =
        useContext(LayoutCtx);

    const handleThemeChange = (event) => {
        setTheme(event.target.checked ? "dark" : "light");
    };

    return (
        <nav className="fixed top-0 w-full z-10 px-0 lg:px-5 bg-white shadow dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
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
                    <DarkSwitch
                        checked={theme === "dark"}
                        onChange={handleThemeChange}
                        inputProps={{ "aria-label": "controlled" }}
                    />

                    <span className="relative inline-flex me-2">
                        <button>
                            <MdOutlineNotifications className="bg-gray-100 dark:bg-gray-700 p-1 rounded-full dark:text-white text-3xl hover:text-primary" />
                        </button>
                        <span className="flex absolute h-[.65rem] w-[.65rem] top-0 right-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-[.65rem] w-[.65rem] bg-sky-500"></span>
                        </span>
                    </span>

                    <Dropdown>
                        <Dropdown.Trigger>
                            <button>
                                <MdOutlineAccountCircle className="dark:text-white text-3xl hover:text-primary me-3" />
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content className="w-48" align="right">
                            <Dropdown.Link
                                href={route("profile.edit")}
                                className="w-full text-left"
                            >
                                <div className="flex items-center">
                                    <FaUser />
                                    <span className="ml-2">Profile</span>
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
                                    <span className="ml-2">Log Out</span>
                                </div>
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
}
