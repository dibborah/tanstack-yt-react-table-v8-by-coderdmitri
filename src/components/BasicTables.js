import { useReactTable } from "@tanstack/react-table";
import {columnDef}from "./columns";

const BasicTables = () => {
  const tableInstance = useReactTable({
    columns: columnDef,
  });
  console.log('test', tableInstance.getHeaderGroups());
  return (
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default BasicTables;
