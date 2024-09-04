import { AddCustomerButton } from "./buttons"
import { PageSizeSelector } from "./page-size-selector"
import { SearchBar } from "./search-bar"

type TableTopBarProps = {
    rowsPerPage: number;
    onPageSizeChange: (pageSize: number) => void;
    globalFilter: string;
    setGlobalFilter: (filterValue: string) => void;
}

export function TableTopBar({
    rowsPerPage,
    onPageSizeChange: onRowsPerPageChange,
    globalFilter,
    setGlobalFilter
}: TableTopBarProps) {
    return (    
        <div className="flex items-center p-4">
            <PageSizeSelector rowsPerPage={rowsPerPage} onRowsPerPageChange={onRowsPerPageChange} />
            <SearchBar globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} className="ml-8" />
            <AddCustomerButton className="ml-auto"/>
        </div >
    )
}