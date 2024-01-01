import SideLink from "./SideLink";
import { MdDashboard } from "react-icons/md";
import { CgChevronDown } from "react-icons/cg";
import {
    Fragment,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { Transition } from "@headlessui/react";

const SideLinkContext = createContext();

const SideLinks = ({ children }) => {
    // check children has active class
    const hasActive = (children) => {
        let active = false;

        children.forEach((child) => {
            let ch = child.props.children;
            //check if ch is array
            if (Array.isArray(ch)) {                
                ch.forEach((c) => {
                    // console.log(c.props.children.props.active);
                    if (c.props.children.props.active) {
                        active = true;
                    }
                });
            } else {
                if (ch.props.active) {
                    active = true;
                }
            }
        });

        return active;
    };

    const [open, setOpen] = useState(hasActive(children));

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <SideLinkContext.Provider value={{ open, setOpen, toggleOpen }}>
            {children}
        </SideLinkContext.Provider>
    );
};

const SideLinkTrigger = ({ children }) => {
    const { open, setOpen, toggleOpen } = useContext(SideLinkContext);

    return (
        <>
            <div
                className="flex items-center justify-between rounded p-2 hover:bg-gray-100 hover:text-primary dark:hover:text-white dark:hover:bg-gray-500 hover:cursor-pointer mb-2"
                onClick={toggleOpen}
            >
                {children}
                <CgChevronDown
                    className={
                        "transition-all duration-200 " +
                        (open ? "" : "-rotate-90")
                    }
                />
            </div>
        </>
    );
};

const SideLinkContent = ({ children }) => {
    const { open, setOpen } = useContext(SideLinkContext);
    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
            >
                <ul className="ms-9 list-disc">{children}</ul>
            </Transition>
        </>
    );
};

SideLinks.Trigger = SideLinkTrigger;
SideLinks.Content = SideLinkContent;

export default SideLinks;

// export default function SideLinks({
//     active = false,
//     className = "",
//     children,
//     ...props
// }) {
//     return (
//         <>
//             <SideLink href="#" className="mb-2">
//                 <div className="flex items-center">
//                     <MdDashboard className="text-xl me-2" />
//                     <span>Dashboard</span>
//                 </div>
//                 <CgChevronDown />
//             </SideLink>
//             <ul className="ms-9 list-disc">
//                 <li className="list-item">
//                     <SideLink
//                         href={route("dashboard.finance")}
//                         active={route().current("dashboard")}
//                         className="mb-1"
//                     >
//                         <div className="flex items-center">
//                             <span>Home</span>
//                         </div>
//                     </SideLink>
//                 </li>
//                 <li className="list-item ">
//                     <SideLink href="#">
//                         <div className="flex items-center">
//                             <span>Analytics</span>
//                         </div>
//                     </SideLink>
//                 </li>
//             </ul>
//         </>
//     );
// }
