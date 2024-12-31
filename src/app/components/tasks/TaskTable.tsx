import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { ComboboxOption } from "../ui/combobox";
import { Dialog, DialogContent } from "../ui/dialog";
import NewTaskForm from "./NewTaskForm";
import { DataTable } from "../data-table/DataTable";
import { TableEntity } from "@/app/models/shared/TableEntity";
import { DataTableOptions } from "../data-table/DataTableOptions";

interface TaskTableProps<TData extends TableEntity, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function TaskTable<TData extends TableEntity, TValue>({ columns, data }: TaskTableProps<TData, TValue>) {
  const comboBoxOptions: ComboboxOption[] = [
    { value: "taskId", label: "Task ID" },
    { value: "projectId", label: "Project ID" },
    { value: "title", label: "Title" },
    { value: "status", label: "Status" },
    { value: "assignee", label: "Assignee" },
    { value: "reporter", label: "Reporter" },
  ];

  const dataTableOptions: DataTableOptions<TData, TValue> = {
    columns,
    data,
    comboBoxOptions,
    tableFor: "Task",
  };

  const [newTaskDialogOpen, setNewTaskDialogOpen] = useState<boolean>(false);

  const openCreateDialog = () => {
    setNewTaskDialogOpen(true);
  };

  return (
    <>
      <DataTable dataTableOptions={dataTableOptions} handleCreateDialog={openCreateDialog} />
      <Dialog open={newTaskDialogOpen} onOpenChange={setNewTaskDialogOpen}>
        <DialogContent className="min-w-[300px] max-w-[60vw]">
          <NewTaskForm />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TaskTable;
