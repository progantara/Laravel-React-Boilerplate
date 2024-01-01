import IndicatorAvatar from "@/Components/Avatars/IndicatorAvatar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head, Link } from "@inertiajs/react";
import { Avatar, AvatarGroup, Tooltip } from "@mui/material";
import { CgFolder } from "react-icons/cg";
import { FaBook, FaPencilAlt } from "react-icons/fa";

export default function AvatarElement({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <ul className="flex space-x-2">
                        <li>
                            <Link
                                href={route("elements.avatar")}
                                className="text-primary hover:underline"
                            >
                                Elements
                            </Link>
                        </li>
                        <li className="before:mr-1 before:content-['/'] rtl:before:ml-1 dark:text-gray-400">
                            <span>Avatar</span>
                        </li>
                    </ul>
                </>
            }
        >
            <Head title="Blank Page" />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 dark:text-white">
                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Basic Avatar</h3>

                    <div className="flex items-center space-x-3 justify-center my-5">
                        <Avatar
                            alt="Remy Sharp"
                            src="/assets/images/user1-128x128.jpg"
                            sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                            alt="Travis Howard"
                            src="/assets/images/user2-160x160.jpg"
                            sx={{ width: 36, height: 36 }}
                        />
                        <Avatar
                            alt="Cindy Baker"
                            src="/assets/images/user3-128x128.jpg"
                            sx={{ width: 56, height: 56 }}
                        />
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Indicator Avatar</h3>

                    <div className="flex items-center space-x-3 justify-center my-5">
                        <IndicatorAvatar
                            alt="Arnie Baker"
                            src="/assets/images/user6-128x128.jpg"
                            sx={{ width: 24, height: 24 }}
                        />
                        <IndicatorAvatar
                            alt="Arnie Baker"
                            src="/assets/images/user5-128x128.jpg"
                            sx={{ width: 36, height: 36 }}
                        />
                        <IndicatorAvatar
                            alt="Arnie Baker"
                            src="/assets/images/user4-128x128.jpg"
                            sx={{ width: 56, height: 56 }}
                        />
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Icon Avatar</h3>

                    <div className="flex items-center space-x-3 justify-center my-5">
                        <Avatar>
                            <CgFolder />
                        </Avatar>
                        <Avatar className="bg-primary">
                            <FaBook />
                        </Avatar>
                        <Avatar className="bg-secondary">
                            <FaPencilAlt />
                        </Avatar>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Letter Avatar</h3>

                    <div className="flex items-center space-x-3 justify-center my-5">
                        <Avatar>A</Avatar>
                        <Avatar className="bg-pink-500">R</Avatar>
                        <Avatar className="bg-green-500">S</Avatar>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Shaped Avatar</h3>

                    <div className="flex items-center space-x-3 justify-center my-5">
                        <Avatar variant="square">A</Avatar>
                        <Avatar variant="rounded" className="bg-pink-500">
                            R
                        </Avatar>
                        <Avatar variant="circle" className="bg-green-500">
                            S
                        </Avatar>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Grouped Avatar</h3>

                    <div className="flex items-center space-x-8 justify-center my-5">
                        <AvatarGroup max={4}>
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/images/user1-128x128.jpg"
                            />
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/images/user3-128x128.jpg"
                            />
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/images/user4-128x128.jpg"
                            />
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/images/user5-128x128.jpg"
                            />
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/images/user6-128x128.jpg"
                            />
                        </AvatarGroup>

                        <AvatarGroup total={20}>
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/images/user1-128x128.jpg"
                            />
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/images/user3-128x128.jpg"
                            />
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/images/user4-128x128.jpg"
                            />
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/images/user5-128x128.jpg"
                            />
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/images/user6-128x128.jpg"
                            />
                        </AvatarGroup>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Tooltip Avatar</h3>

                    <div className="flex items-center space-x-3 justify-center my-5">
                        <Tooltip title="Remy Sharp">
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/images/user1-128x128.jpg"
                                sx={{ width: 24, height: 24 }}
                            />
                        </Tooltip>

                        <Tooltip title="Travis Howard" arrow>
                            <Avatar
                                alt="Travis Howard"
                                src="/assets/images/user2-160x160.jpg"
                                sx={{ width: 36, height: 36 }}
                            />
                        </Tooltip>

                        <Tooltip title="Cindy Baker" placement="top" arrow>
                            <Avatar
                                alt="Cindy Baker"
                                src="/assets/images/user3-128x128.jpg"
                                sx={{ width: 56, height: 56 }}
                            />
                        </Tooltip>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded">
                    <h3 className="font-bold h-5">Broken Avatar</h3>

                    <div className="flex items-center space-x-3 justify-center my-5">
                        <Avatar
                            alt="Remy Sharp"
                            src="/assets/images/none.jpg"
                            sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                            alt="Travis Howard"
                            src="/assets/images/broken.jpg"
                            sx={{ width: 36, height: 36 }}
                            className="bg-primary"
                        >T</Avatar>
                        <Avatar
                            src="/assets/images/broken.jpg"
                            sx={{ width: 56, height: 56 }}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
