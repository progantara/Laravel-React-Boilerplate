import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Badge from "@mui/material/Badge";
import { FaBell } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function BadgeElement({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <ul className="flex space-x-2">
                        <li>
                            <Link
                                href={route("elements.badge")}
                                className="text-primary hover:underline"
                            >
                                Elements
                            </Link>
                        </li>
                        <li className="before:mr-1 before:content-['/'] rtl:before:ml-1 dark:text-gray-400">
                            <span>Badge</span>
                        </li>
                    </ul>
                </>
            }
        >
            <Head title="Blank Page" />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 dark:text-white">
                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Basic Badge</h3>

                    <div className="block xl:flex items-center space-x-1 xl:space-x-3 justify-center my-5">
                        <Badge className="bg-primary text-white text-xs font-medium px-2.5 py-0.5 rounded">
                            Primary
                        </Badge>
                        <Badge className="bg-secondary text-white text-xs font-medium px-2.5 py-0.5 rounded">
                            Secondary
                        </Badge>
                        <Badge className="bg-success text-white text-xs font-medium px-2.5 py-0.5 rounded">
                            Success
                        </Badge>
                        <Badge className="bg-danger text-white text-xs font-medium px-2.5 py-0.5 rounded">
                            Danger
                        </Badge>
                        <Badge className="bg-warning text-white text-xs font-medium px-2.5 py-0.5 rounded">
                            Warning
                        </Badge>
                        <Badge className="bg-info text-white text-xs font-medium px-2.5 py-0.5 rounded">
                            Info
                        </Badge>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Outlined Badge</h3>

                    <div className="block xl:flex items-center space-x-1 xl:space-x-3 justify-center my-5">
                        <Badge className="border border-primary text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                            Primary
                        </Badge>
                        <Badge className="border border-secondary text-secondary text-xs font-medium px-2.5 py-0.5 rounded">
                            Secondary
                        </Badge>
                        <Badge className="border border-success text-success text-xs font-medium px-2.5 py-0.5 rounded">
                            Success
                        </Badge>
                        <Badge className="border border-danger text-danger text-xs font-medium px-2.5 py-0.5 rounded">
                            Danger
                        </Badge>
                        <Badge className="border border-warning text-warning text-xs font-medium px-2.5 py-0.5 rounded">
                            Warning
                        </Badge>
                        <Badge className="border border-info text-info text-xs font-medium px-2.5 py-0.5 rounded">
                            Info
                        </Badge>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Pills Badge</h3>

                    <div className="flex items-center space-x-3 justify-center my-5">
                        <Badge className="bg-primary text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                            Primary
                        </Badge>
                        <Badge className="border border-secondary text-secondary text-xs font-medium px-2.5 py-0.5 rounded-full">
                            Secondary
                        </Badge>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Badge in icon</h3>

                    <div className="flex items-center space-x-3 justify-center my-5">
                        <Badge badgeContent={4} color="primary">
                            <MdMail className="text-3xl" />
                        </Badge>
                        <Badge badgeContent={4} color="secondary">
                            <MdMail className="text-3xl" />
                        </Badge>
                        <Badge badgeContent={0} color="success" showZero>
                            <MdMail className="text-3xl" />
                        </Badge>
                        <Badge badgeContent={999} color="error" showZero>
                            <MdMail className="text-3xl" />
                        </Badge>
                        <Badge
                            badgeContent={1000}
                            color="warning"
                            showZero
                            max={999}
                        >
                            <MdMail className="text-3xl" />
                        </Badge>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Position Badge</h3>

                    <div className="flex items-center space-x-3 justify-center my-5">
                        <Badge
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            badgeContent={4}
                            color="primary"
                        >
                            <MdMail className="text-3xl" />
                        </Badge>
                        <Badge
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            badgeContent={4}
                            color="secondary"
                        >
                            <MdMail className="text-3xl" />
                        </Badge>
                        <Badge
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            badgeContent={0}
                            color="success"
                            showZero
                        >
                            <MdMail className="text-3xl" />
                        </Badge>
                        <Badge
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            badgeContent={999}
                            color="error"
                            showZero
                        >
                            <MdMail className="text-3xl" />
                        </Badge>
                        <Badge
                            badgeContent={1000}
                            color="warning"
                            showZero
                            max={999}
                        >
                            <MdMail className="text-3xl" />
                        </Badge>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Dot Badge</h3>

                    <div className="flex items-center space-x-3 justify-center my-5">
                        <Badge color="secondary" variant="dot" className="bg-primary text-white rounded p-1">
                            <MdMail className="text-3xl" />
                        </Badge>
                        <Badge color="secondary" overlap="circular" variant="dot" className="bg-primary text-white rounded-full p-1">
                            <MdMail className="text-3xl" />
                        </Badge>
                        <Badge color="success" overlap="circular" variant="dot">
                            <FaBell className="text-3xl text-yellow-400" />
                        </Badge>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
