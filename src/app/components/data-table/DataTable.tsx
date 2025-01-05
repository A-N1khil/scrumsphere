import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import { Combobox, ComboboxOption } from "@/app/components/ui/combobox";
import { Input } from "@/app/components/ui/input";
import { useState } from "react";
import { DataTableOptions } from "./DataTableOptions";
import { TableEntity } from "@/app/models/shared/TableEntity";

export type DataTableProps<TData extends TableEntity, TValue> = {
  dataTableOptions: DataTableOptions<TData, TValue>;
};

export function DataTable<TData extends TableEntity, TValue>({ dataTableOptions }: DataTableProps<TData, TValue>) {
  const { columns, data, comboBoxOptions } = dataTableOptions;
  const [filterKey, setFilterKey] = useState<string>(comboBoxOptions[0].label);
  const [filterValue, setFilterValue] = useState<string>(comboBoxOptions[0].value);

  const handleOptionChange = (option: ComboboxOption) => {
    setFilterKey(option.label);
    setFilterValue(option.value);
  };

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <>
      <div className="flex py-4 justify-between">
        <div className="flex items-center min-w-lg">
          <Input
            placeholder={"Filter via " + (filterKey ?? "field") + "..."}
            value={(table.getColumn(filterValue ?? comboBoxOptions[0].label)?.getFilterValue() as string) ?? ""}
            onChange={(e) => table.getColumn(filterValue ?? comboBoxOptions[0].label)?.setFilterValue(e.target.value)}
            className="max-w-xs float-right"
          />
          <div className="ml-2">
            <Combobox
              options={comboBoxOptions}
              placeholder="Filter via field..."
              handleOptionChange={handleOptionChange}
            />
          </div>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow data-testid={row.original.id} key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="text-left" key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
