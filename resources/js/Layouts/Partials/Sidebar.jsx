import SideLinks from "@/Components/Links/SideLinks";
import SideLink from "@/Components/Links/SideLink";

import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaCube } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { TbUsers } from "react-icons/tb";

export default function Sidebar() {
    return (
        <ul className="text-sm">
            <li>
                <SideLinks>
                    <SideLinks.Trigger>
                        <div className="flex items-center">
                            <MdDashboard className="me-2" />
                            <span>Dashboard</span>
                        </div>
                    </SideLinks.Trigger>
                    <SideLinks.Content>
                        <li>
                            <SideLink
                                href={route("dashboard.finance")}
                                active={route().current("dashboard.finance")}
                                className="mb-1"
                            >
                                Finance
                            </SideLink>
                        </li>
                        <li>
                            <SideLink
                                href={route("dashboard.analytic")}
                                active={route().current("dashboard.analytic")}
                                className="mb-1"
                            >
                                Analytic
                            </SideLink>
                        </li>
                    </SideLinks.Content>
                </SideLinks>
            </li>
            <h2 className="-mx-5 mt-4 mb-2 flex items-center bg-gray-100 py-3 px-7 font-extrabold uppercase dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-30">
                <span>APPS</span>
            </h2>
            <li>
                <SideLink
                    href={"#"}
                    active={false}
                >
                    <div className="flex items-center">
                        <IoIosChatbubbles className="me-2" />
                        <span>Chat</span>
                    </div>
                </SideLink>
            </li>
            <h2 className="-mx-5 mt-4 mb-2 flex items-center bg-gray-100 py-3 px-7 font-extrabold uppercase dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-30">
                <span>UI</span>
            </h2>
            <li>
                <SideLinks>
                    <SideLinks.Trigger>
                        <div className="flex items-center">
                            <FaCube className="me-2" />
                            <span>Elements</span>
                        </div>
                    </SideLinks.Trigger>
                    <SideLinks.Content>
                        <li>
                            <SideLink
                                href={route("elements.alert")}
                                active={route().current("elements.alert")}
                                className="mb-1"
                            >
                                Alerts
                            </SideLink>
                        </li>
                        <li>
                            <SideLink
                                href={route("elements.avatar")}
                                active={route().current("elements.avatar")}
                                className="mb-1"
                            >
                                Avatars
                            </SideLink>
                        </li>
                        <li>
                            <SideLink
                                href={route("elements.badge")}
                                active={route().current("elements.badge")}
                                className="mb-1"
                            >
                                Badges
                            </SideLink>
                        </li>
                        <li>
                            <SideLink
                                href={route("elements.button")}
                                active={route().current("elements.button")}
                                className="mb-1"
                            >
                                Button
                            </SideLink>
                        </li>
                    </SideLinks.Content>
                </SideLinks>
            </li>
            <h2 className="-mx-5 mt-4 mb-2 flex items-center bg-gray-100 py-3 px-7 font-extrabold uppercase dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-30">
                <span>USER AND PAGES</span>
            </h2>
            <li>
                <SideLinks>
                    <SideLinks.Trigger>
                        <div className="flex items-center">
                            <FaCube className="me-2" />
                            <span>Pages</span>
                        </div>
                    </SideLinks.Trigger>
                    <SideLinks.Content>
                        <li>
                            <SideLink
                                href={route("pages.blank")}
                                active={route().current("pages.blank")}
                                className="mb-1"
                            >
                                Blank
                            </SideLink>
                        </li>
                    </SideLinks.Content>
                </SideLinks>
            </li>
            <li>
                <SideLinks>
                    <SideLinks.Trigger>
                        <div className="flex items-center">
                            <TbUsers className="me-2" />
                            <span>Users</span>
                        </div>
                    </SideLinks.Trigger>
                    <SideLinks.Content>
                        <li>
                            <SideLink
                                href={route("profile.edit")}
                                active={route().current("profile.edit")}
                            >
                                <div className="flex items-center">
                                    Profile
                                </div>
                            </SideLink>
                        </li>
                    </SideLinks.Content>
                </SideLinks>
            </li>
        </ul>
    );
}
