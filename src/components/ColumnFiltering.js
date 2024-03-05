import React from "react";
import "./tables.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { columnDefWithFilter } from "./columns";
import dataJSON from "./data.json";
import FilterFunction from "./FilterFunction";

const ColumnFiltering = () => {
  const finalData = React.useMemo(() => dataJSON, []);
  const finalColumnDef = React.useMemo(() => columnDefWithFilter, []);
  const [columnFilters, setColumnFilters] = React.useState([]); //column Filter has to be an Array //It can never be a string like the one used in Global filters
  const defaultColumn = React.useMemo(
    () => ({
      youtubeProp: "Hello Dan Abranov",
    }),
    []
  );

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    defaultColumn: defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters: columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
  });

  //   console.log("test", tableInstance.getHeaderGroups());

  //   React.useEffect(() => {
  //     console.log(tableInstance.getState().columnFilters);
  //   });

  return (
    <>
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  // Both the consoles below are to observe that For every column header the defaultColumn prop is consoled since the prop "youtubeProp" is added as defaultColumn in every column
                  // console.log('Header', columnEl.column.columnDef.header);
                  console.log(
                    "Our defaultProperty",
                    columnEl.column.columnDef.youtubeProp
                  );
                  return (
                    <th key={columnEl.id} colSpan={columnEl.colSpan}>
                      {columnEl.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                          {columnEl.column.getCanFilter() ? ( // This line which is not in the video but is in the repo is very very important
                            <div>
                              <FilterFunction
                                column={columnEl.column}
                                table={tableInstance}
                              />
                            </div>
                          ) : null}
                        </>
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ColumnFiltering;
