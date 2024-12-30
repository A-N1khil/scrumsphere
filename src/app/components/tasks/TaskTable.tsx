import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { columnWithActions } from "./Columns";
import { Task } from "@/app/models/tasks/Task";
import { Combobox, ComboboxOption } from "../ui/combobox";

interface TaskTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: Task[];
  toggleModal: (task: Task) => void;
}

export function TaskTable<TData, TValue>({ columns, data, toggleModal }: TaskTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const tableColumns = columnWithActions({ toggleModal });

  const table = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  const comboOptions: ComboboxOption[] = [
    { value: "taskId", label: "Task ID" },
    { value: "projectId", label: "Project ID" },
    { value: "title", label: "Title" },
    { value: "status", label: "Status" },
    { value: "assignee", label: "Assignee" },
    { value: "reporter", label: "Reporter" },
  ];

  const [filterKey, setFilterKey] = useState<string>(comboOptions[0].label);
  const [filterValue, setFilterValue] = useState<string>(comboOptions[0].value);

  const handleOptionChange = (option: ComboboxOption) => {
    setFilterKey(option.label);
    setFilterValue(option.value);
  };

  return (
    <>
      <div className="flex py-4 justify-between">
        <div className="flex items-center min-w-lg">
          <Input
            placeholder={"Filter via " + (filterKey ?? "field") + "..."}
            value={(table.getColumn(filterValue ?? "taskId")?.getFilterValue() as string) ?? ""}
            onChange={(e) => table.getColumn(filterValue ?? "taskId")?.setFilterValue(e.target.value)}
            className="max-w-xs float-right"
          />
          <div className="ml-2">
            <Combobox
              options={comboOptions}
              placeholder="Filter via field..."
              handleOptionChange={handleOptionChange}
            />
          </div>
        </div>
        <Button size="default" type="button" variant="default" className="float-left mr-3">
          <Plus />
          Create Task
        </Button>
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
                <TableRow data-testid={row.original.taskId} key={row.id} data-state={row.getIsSelected() && "selected"}>
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

export default TaskTable;
