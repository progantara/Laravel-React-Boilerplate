import * as React from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { FaHome } from "react-icons/fa";

export default function BaseAlert({
    children,
    variant = "filled",
    className = "",
    close = false,
    icon,
}) {
    const [open, setOpen] = React.useState(true);

    if(icon === undefined) {
        icon = false;
    }

    return (
        <Collapse in={open}>
            <Alert
                variant={variant}
                icon={icon}
                action={
                    close && (
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    )
                }
                className={"flex items-center " + className}
            >
                {children}
            </Alert>
        </Collapse>
    );
}
