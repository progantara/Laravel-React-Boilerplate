import BaseAlert from "@/Components/Alerts/BaseAlert";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Box } from "@mui/material";
import { FaBox, FaCheck, FaHome, FaInfoCircle } from "react-icons/fa";
import { GoAlert } from "react-icons/go";

export default function AlertElement({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <ul className="flex space-x-2">
                        <li>
                            <Link
                                href={route("elements.alert")}
                                className="text-primary hover:underline"
                            >
                                Elements
                            </Link>
                        </li>
                        <li className="before:mr-1 before:content-['/'] rtl:before:ml-1 dark:text-gray-400">
                            <span>Alert</span>
                        </li>
                    </ul>
                </>
            }
        >
            <Head title="Finance Dashboard" />

            <div className="bg-white dark:bg-gray-800 p-5 rounded mb-5">
                <h3 className="font-bold mb-5">Default Alert</h3>

                <Box className="mb-3">
                    <BaseAlert className="bg-primary-500 bg-opacity-20 text-primary">
                        <strong>Primary!</strong> Lorem Ipsum is simply dummy
                        text of the printing.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert className="bg-secondary-500 bg-opacity-20 text-secondary">
                        <strong>Secondary!</strong> Lorem Ipsum is simply dummy
                        text of the printing.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert className="bg-success-500 bg-opacity-20 text-success">
                        <strong>Success!</strong> Lorem Ipsum is simply dummy
                        text of the printing.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert className="bg-danger-500 bg-opacity-20 text-danger">
                        <strong>Danger!</strong> Lorem Ipsum is simply dummy
                        text of the printing.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert className="bg-warning-500 bg-opacity-20 text-warning">
                        <strong>Warning!</strong> Lorem Ipsum is simply dummy
                        text of the printing.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert className="bg-info-500 bg-opacity-20 text-info">
                        <strong>Info!</strong> Lorem Ipsum is simply dummy text
                        of the printing.
                    </BaseAlert>
                </Box>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded mb-5">
                <h3 className="font-bold mb-5">Closable Alert</h3>

                <Box className="mb-3">
                    <BaseAlert
                        className="bg-success-500 bg-opacity-20 text-success"
                        close={true}
                    >
                        <strong>Success!</strong> Our system has successfully
                        saved your data.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert
                        className="bg-danger-500 bg-opacity-20 text-danger"
                        close={true}
                    >
                        <strong>Error!</strong> Something went wrong. Please try
                        again later.
                    </BaseAlert>
                </Box>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded mb-5">
                <h3 className="font-bold mb-5">Solid Alert</h3>

                <Box className="mb-3">
                    <BaseAlert
                        className="bg-primary text-white"
                        variant="filled"
                    >
                        <strong>Primary!</strong> Lorem Ipsum is simply dummy
                        text.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert
                        className="bg-secondary text-white"
                        variant="filled"
                    >
                        <strong>Secondary!</strong> Lorem Ipsum is simply dummy
                        text.
                    </BaseAlert>
                </Box>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded mb-5">
                <h3 className="font-bold mb-5">Outline Alert</h3>

                <Box className="mb-3">
                    <BaseAlert className="border-success" variant="outlined">
                        <strong>Success!</strong> Our system has successfully
                        saved your data.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert className="border-danger" variant="outlined">
                        <strong>Error!</strong> Something went wrong. Please try
                        again later.
                    </BaseAlert>
                </Box>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded mb-5">
                <h3 className="font-bold mb-5">Alert with icon</h3>

                <Box className="mb-3">
                    <BaseAlert
                        className="bg-primary-500 bg-opacity-20 text-primary"
                        icon={<FaHome />}
                    >
                        <strong>Primary!</strong> Lorem Ipsum is simply dummy
                        text of the printing.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert
                        className="bg-secondary-500 bg-opacity-20 text-secondary"
                        icon={<FaBox />}
                    >
                        <strong>Secondary!</strong> Lorem Ipsum is simply dummy
                        text of the printing.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert
                        className="bg-success-500 bg-opacity-20 text-success"
                        icon={<FaCheck />}
                    >
                        <strong>Success!</strong> Lorem Ipsum is simply dummy
                        text of the printing.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert
                        className="bg-danger-500 bg-opacity-20 text-danger"
                        icon={<FaInfoCircle />}
                    >
                        <strong>Danger!</strong> Lorem Ipsum is simply dummy
                        text of the printing.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert
                        className="bg-warning-500 bg-opacity-20 text-warning"
                        icon={<GoAlert />}
                    >
                        <strong>Warning!</strong> Lorem Ipsum is simply dummy
                        text of the printing.
                    </BaseAlert>
                </Box>

                <Box className="mb-3">
                    <BaseAlert
                        className="bg-info-500 bg-opacity-20 text-info"
                        icon={<FaInfoCircle />}
                    >
                        <strong>Info!</strong> Lorem Ipsum is simply dummy text
                        of the printing.
                    </BaseAlert>
                </Box>
            </div>
        </AuthenticatedLayout>
    );
}
