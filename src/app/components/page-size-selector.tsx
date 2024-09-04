import { CustomSelect } from "./custom-select";

type PageSizeSelectorProps = {
    rowsPerPage: number;
    onRowsPerPageChange: (newRowsPerPage: number) => void;
}

const options = [10, 15, 20, 30, 40, 50, 75, 100, 150, 200];

export function PageSizeSelector({ rowsPerPage, onRowsPerPageChange }: PageSizeSelectorProps) {
    return (
        <div className="flex space-x-2 items-center text-xs">
            <span>Show</span>
            <CustomSelect
                options={options}
                value={rowsPerPage}
                onChange={onRowsPerPageChange}
            />
            <span>entries</span>
        </div>
    )
}