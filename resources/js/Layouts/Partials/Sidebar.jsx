import SideLinks from "@/Components/Links/SideLinks";
import { MdDashboard } from "react-icons/md";
import SideLink from "@/Components/Links/SideLink";
import { CgProfile } from "react-icons/cg";

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
            <h2 className="-mx-8 mt-4 mb-2 flex items-center bg-gray-100 py-3 px-10 font-extrabold uppercase dark:bg-gray-900">
                <span>APPS</span>
            </h2>
            <li>
                <SideLink
                    href={route("profile.edit")}
                    active={route().current("profile.edit")}
                >
                    <div className="flex items-center">
                        <CgProfile className="me-2" />
                        <span>Profile</span>
                    </div>
                </SideLink>
            </li>
        </ul>
    );
}
