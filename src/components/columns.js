// Some notes on columnDef or columnDefination array
// ColumnDefination or columnDef is an Array of objects. And every object inside that array has to correspond to what's inside that data

import { createColumnHelper } from "@tanstack/react-table";
import { getValue } from "@testing-library/user-event/dist/utils";
import moment from "moment";

const columnHelper = createColumnHelper();

export const columnDef = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  {
    accessorFn: (row) => `${row.first_name}`,
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("Date", {
    header: "Date",
  }),
];

// cell merge example

export const columnDefWithCellMerge = [
  {
    accessorFn: (row) => `${row.first_name} ${row.last_name} ${row.gender}`,
    header: "Full Name and Gender",
  },
];

// Creating Two columns in Name

export const columnDefWithGrouping = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  {
    header: "Name",
    columns: [
      {
        accessorFn: (row) => `${row.first_name}`,
        header: "First Name",
      },
      {
        accessorKey: "last_name",
        header: "Last Name",
      },
    ],
  },
  {
    header: 'Phone and Gender',
    columns: [
      {
        header: 'Phone',
        accessorFn: (row) => `${row.phone}`,
      },
      {
        header: 'Gender',
        accessorKey: 'gender',

      }
    ]
  },
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("Date", {
    header: "Date",
    cell: ({getValue}) => moment(new Date(getValue())).format("MMM Do YY"),
  }),
];

// 1st way of creating columns

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


// columnDef for filter

export const columnDefWithFilter = [
  columnHelper.accessor("id", {
    header: "ID",
    enableColumnFilter: false,
  }),
  {
    accessorFn: (row) => `${row.first_name}`,
    header: "First Name",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    enableColumnFilter: true,
  },
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("Date", {
    header: "Date",
    enableColumnFilter: true,   
  }),
];
