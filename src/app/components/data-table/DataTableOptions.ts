import { ColumnDef } from "@tanstack/react-table";
import { ComboboxOption } from "../ui/combobox";

export interface DataTableOptions<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  comboBoxOptions: ComboboxOption[];
  tableFor: string;
}
