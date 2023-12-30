import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const customStyle = {
    "& .MuiCheckbox-root input": {
        width: "100%",
        height: "100%",
    },
    "& .long-cell > .MuiDataGrid-cellContent": {
        whiteSpace: "normal",
        lineHeight: "normal",
        maxHeight: "50px",
        overflow: "auto",
    },
    "& .long-cell > .MuiDataGrid-cellContent::-webkit-scrollbar": {
        width: ".2em",
    },
    "& .long-cell > .MuiDataGrid-cellContent::-webkit-scrollbar-track": {
        background: "#fff",
        borderRadius: "5px",
    },
    "& .long-cell > .MuiDataGrid-cellContent::-webkit-scrollbar-thumb": {
        background: "#000",
        borderRadius: "5px",
    },
    "& .long-cell > .MuiDataGrid-cellContent::-webkit-scrollbar-thumb:hover": {
        background: "#212121",
    },
};

export default function DataTable({ columns, rows, checkboxSelection = true }) {
    return (
        <div>
            <DataGrid
                sx={customStyle}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection={checkboxSelection}
            />
        </div>
    );
}
