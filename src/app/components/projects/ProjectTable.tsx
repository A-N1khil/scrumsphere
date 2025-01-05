import { TableEntity } from "@/app/models/shared/TableEntity";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../data-table/DataTable";
import { DataTableOptions } from "../data-table/DataTableOptions";

interface TaskTableProps<TData extends TableEntity, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function ProjectTable<TData extends TableEntity, TValue>({ columns, data }: TaskTableProps<TData, TValue>) {
  const comboBoxOptions = [
    { value: "projectId", label: "Project ID" },
    { value: "epicId", label: "Epic ID" },
    { value: "projectName", label: "Project Name" },
  ];

  const dataTableOptions: DataTableOptions<TData, TValue> = {
    columns,
    data,
    comboBoxOptions,
    tableFor: "Task",
  };

  return (
    <>
      <DataTable dataTableOptions={dataTableOptions} />
    </>
  );
}
