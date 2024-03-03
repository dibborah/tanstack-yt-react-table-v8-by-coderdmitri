// Some notes on columnDef or columnDefination array
// ColumnDefination or columnDef is an Array of objects. And every object inside that array has to correspond to what's inside that data

import { createColumnHelper } from "@tanstack/react-table"

const columnHelper = createColumnHelper();

export const columnDef = [
    columnHelper.accessor('id', {
        header: 'ID'
    }),
    {
        accessorFn: (row) => `${row.first_name} ${row.last_name} ${row.gender}`,
        header: 'Name'
    },
    // {
    //     accessorKey: "last_name",
    //     header: 'Last Name'
    // },
    columnHelper.accessor('email', {
        header: 'Email'
    }),
    columnHelper.accessor('Date', {
        header: 'Date'
    })
]

// export const columnDef = [
//     {
//         accessorKey: 'id',
//         header: 'ID'
//     },
//     {
//         accessorKey: 'first_name',
//         header: 'First Name'
//     },
    // {
    //     accessorKey: 'last_name',
    //     header: 'Last Name'
    // },
//     {
//         accessorKey: 'email',
//         header: 'Email'
//     },
//     {
//         accessorKey: 'Date',
//         header: 'Date'
//     }
// ]