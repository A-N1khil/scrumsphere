import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";
import { useState } from "react";

export type ComboboxOption = {
  value: string;
  label: string;
};

export type ComboboxProps = {
  options: ComboboxOption[];
  placeholder?: string;
  handleOptionChange: (option: ComboboxOption) => void;
};

export function Combobox({ options, placeholder = "Select...", handleOptionChange }: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(options[0].value);

  const handleValueChange = (newValue: ComboboxOption) => {
    handleOptionChange(newValue);
    setValue(newValue.value);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? options.find((option) => option.value === value)?.label : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem key={option.value} value={option.value} onSelect={() => handleValueChange(option)}>
                  {option.label}
                  <Check className={cn("ml-auto", value === option.value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
