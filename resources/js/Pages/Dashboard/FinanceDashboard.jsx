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
                <ul className="flex space-x-2 rtl:space-x-reverse">
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
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg mb-5">
                        <div className="p-6 text-gray-900 dark:bg-gray-800  dark:text-gray-100 mb-5">
                            You're logged in!
                        </div>

                        <DataTable columns={columns} rows={rows} />
                    </div>
                    <PrimaryButton className="mb-5">Hello World</PrimaryButton>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in! lorem Culpa ex cillum quis
                            deserunt voluptate amet elit do qui fugiat.Tempor
                            anim proident reprehenderit veniam adipisicing
                            pariatur veniam cupidatat fugiat ex cillum. Commodo
                            sint velit sit labore enim in amet excepteur do qui
                            occaecat laboris non amet. Lorem labore sunt commodo
                            est laborum sit non elit. Culpa cupidatat eiusmod
                            adipisicing ex ea esse do duis fugiat sit ea. Magna
                            officia laboris excepteur voluptate proident aute
                            deserunt irure laboris. Ut fugiat amet laborum sunt
                            voluptate est consectetur in magna. Sint velit
                            commodo culpa fugiat labore officia veniam cillum.
                            Reprehenderit in ut sit qui culpa ad. Adipisicing
                            dolor ex ex ad dolore veniam fugiat ullamco dolor.
                            Sunt est laborum cillum pariatur non fugiat anim
                            consectetur do. Incididunt fugiat incididunt fugiat
                            deserunt.
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
