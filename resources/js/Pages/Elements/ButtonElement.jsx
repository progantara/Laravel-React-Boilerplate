import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Button, IconButton } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
    FaFingerprint,
    FaRegTrashAlt,
    FaSave,
    FaShoppingCart,
    FaTrashAlt,
} from "react-icons/fa";
import { IoAlarm, IoSend } from "react-icons/io5";

export default function ButtonElement({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <ul className="flex space-x-2">
                        <li>
                            <Link
                                href={route("elements.button")}
                                className="text-primary hover:underline"
                            >
                                Elements
                            </Link>
                        </li>
                        <li className="before:mr-1 before:content-['/'] rtl:before:ml-1 dark:text-gray-400">
                            <span>Button</span>
                        </li>
                    </ul>
                </>
            }
        >
            <Head title="Elements: Button" />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 dark:text-white">
                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Default Button</h3>

                    <div className="flex flex-wrap items-center justify-center gap-2 my-5">
                        <Button color="primary">Primary</Button>
                        <Button color="secondary">Secondary</Button>
                        <Button color="success">Success</Button>
                        <Button color="error">Error</Button>
                        <Button color="warning">Warning</Button>
                        <Button color="info">Info</Button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Contained Button</h3>

                    <div className="flex flex-wrap items-center justify-center gap-2 my-5">
                        <Button
                            color="primary"
                            variant="contained"
                            className="bg-primary"
                        >
                            Primary
                        </Button>
                        <Button
                            color="secondary"
                            variant="contained"
                            className="bg-secondary"
                        >
                            Secondary
                        </Button>
                        <Button
                            color="success"
                            variant="contained"
                            className="bg-success"
                        >
                            Success
                        </Button>
                        <Button
                            color="error"
                            variant="contained"
                            className="bg-danger"
                        >
                            Error
                        </Button>
                        <Button
                            color="warning"
                            variant="contained"
                            className="bg-warning"
                        >
                            Warning
                        </Button>
                        <Button
                            color="info"
                            variant="contained"
                            className="bg-info"
                        >
                            Info
                        </Button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Outlined Button</h3>

                    <div className="flex flex-wrap items-center justify-center gap-2 my-5">
                        <Button color="primary" variant="outlined">
                            Primary
                        </Button>
                        <Button color="secondary" variant="outlined">
                            Secondary
                        </Button>
                        <Button color="success" variant="outlined">
                            Success
                        </Button>
                        <Button color="error" variant="outlined">
                            Error
                        </Button>
                        <Button color="warning" variant="outlined">
                            Warning
                        </Button>
                        <Button color="info" variant="outlined">
                            Info
                        </Button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Button Size</h3>

                    <div className="flex flex-wrap items-center justify-center gap-2 my-5">
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            className="bg-primary"
                        >
                            Large
                        </Button>
                        <Button
                            color="secondary"
                            variant="contained"
                            size="medium"
                            className="bg-secondary"
                        >
                            Medium
                        </Button>
                        <Button
                            color="success"
                            variant="contained"
                            size="small"
                            className="bg-success"
                        >
                            Small
                        </Button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Button with icon</h3>

                    <div className="flex flex-wrap items-center justify-center gap-2 my-5">
                        <Button
                            variant="outlined"
                            startIcon={<FaTrashAlt />}
                            color="error"
                        >
                            Delete
                        </Button>
                        <Button
                            variant="contained"
                            endIcon={<IoSend />}
                            className="bg-primary"
                        >
                            Send
                        </Button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Icon Button</h3>

                    <div className="flex flex-wrap items-center justify-center gap-2 my-5">
                        <IconButton aria-label="Delete">
                            <FaTrashAlt />
                        </IconButton>
                        <IconButton
                            aria-label="delete"
                            disabled
                            color="primary"
                        >
                            <FaTrashAlt />
                        </IconButton>
                        <IconButton color="secondary" aria-label="add an alarm">
                            <IoAlarm />
                        </IconButton>
                        <IconButton
                            color="primary"
                            aria-label="add to shopping cart"
                        >
                            <FaShoppingCart />
                        </IconButton>
                        <IconButton color="success" aria-label="fingerprint">
                            <FaFingerprint />
                        </IconButton>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Loading Button</h3>

                    <div className="flex flex-wrap items-center justify-center gap-2 my-5">
                        <LoadingButton loading variant="outlined">
                            Submit
                        </LoadingButton>
                        <LoadingButton
                            loading
                            loadingIndicator="Loading…"
                            variant="outlined"
                        >
                            Fetch data
                        </LoadingButton>
                        <LoadingButton
                            loading
                            loadingPosition="start"
                            startIcon={<FaSave />}
                            variant="outlined"
                        >
                            Save
                        </LoadingButton>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
