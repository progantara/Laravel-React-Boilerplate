import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Blank({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <ul className="flex space-x-2">
                        <li>
                            <Link
                                href={route("pages.blank")}
                                className="text-primary hover:underline"
                            >
                                Pages
                            </Link>
                        </li>
                        <li className="before:mr-1 before:content-['/'] rtl:before:ml-1 dark:text-gray-400">
                            <span>Blank</span>
                        </li>
                    </ul>
                    <h1 className="text-xl font-bold">BLANK PAGE</h1>
                </>
            }
        >
            <Head title="Blank Page" />

            <div className="bg-white dark:bg-gray-800 p-5">
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
