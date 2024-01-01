import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import DataTable from "@/Components/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "firstName",
        headerName: "First name",
        width: 130,
    },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
    },
    {
        field: "fullName",
        headerName: "Full name",
        cellClassName: "long-cell",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
];

const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    {
        id: 9,
        lastName: "Roxie",
        firstName:
            "Harvey lorem lorem lorem lorem ipsum color sti amet oalk wonder",
        age: 65,
    },
];

export default function Finance({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <ul className="flex space-x-2">
                        <li>
                            <Link
                                href={route("dashboard.finance")}
                                className="text-primary hover:underline"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="before:mr-1 before:content-['/'] rtl:before:ml-1 dark:text-gray-400">
                            <span>Finance</span>
                        </li>
                    </ul>
                    <h1 className="text-xl font-bold">FINANCE DASHBOARD</h1>
                </>
            }
        >
            <Head title="Finance Dashboard" />

            <div className="py-6">
                <span>
                    Laborum sit pariatur laborum sit est consequat. Irure elit
                    elit deserunt commodo. Occaecat qui deserunt aliqua aliqua
                    nulla commodo est tempor aliqua laboris. Labore deserunt
                    minim pariatur est reprehenderit id proident ullamco. Eu
                    cillum anim voluptate ex cupidatat qui Lorem culpa ad
                    mollit. Sit anim amet laborum consequat labore. Incididunt
                    est deserunt consequat consectetur reprehenderit dolor do
                    esse veniam laboris commodo tempor tempor commodo.
                </span>
            </div>
        </AuthenticatedLayout>
    );
}
