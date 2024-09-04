import React from 'react';
import { TableInstance } from 'react-table';
import { Item } from './table';

type TableBottomBarProps = {
    tableInstance: TableInstance<Item>;
}

export function TableBottomBar({ tableInstance }: TableBottomBarProps) {
    const {
        pageOptions,
        state: { pageIndex },
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
        gotoPage,
    } = tableInstance;

    // Calculate the range of page numbers to display
    const pageCount = pageOptions.length;
    const numberOfButtons = 3; // Number of page buttons to display
    const startPage = Math.max(0, pageIndex - Math.floor(numberOfButtons / 2));
    const endPage = Math.min(pageCount - 1, startPage + numberOfButtons - 1);

    // Generate the array of page numbers to display
    const pagesToDisplay = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );

    return (
        <div className="flex items-center justify-center p-4 space-x-2">
            {/* Кнопка Previous */}
            <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className={`px-3 py-1 text-xs bg-transparent
                    ${canPreviousPage ? "text-secondary-text dark:text-dark-secondary-text" :
                        "text-secondary-text dark:text-dark-secondary-text"}
                    `}
            >
                Previous
            </button>

            {/* Номери сторінок */}
            {pagesToDisplay.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => gotoPage(pageNumber)}
                    className={`h-8 w-8 px-2 py-2 rounded-lg text-xs
                        ${pageIndex === pageNumber ?
                            "bg-page-current-bg text-page-current-text dark:bg-dark-page-current-bg dark:text-dark-page-current-text" :
                            "bg-page-other-bg text-page-other-text dark:bg-dark-page-other-bg dark:text-dark-page-other-text"
                        }`}
                >
                    {pageNumber + 1}
                </button>
            ))}

            {/* Кнопка Next */}
            <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className={`px-3 py-1 text-xs bg-transparent
                    ${canNextPage ? "text-secondary-text dark:text-dark-secondary-text" :
                        "text-secondary-text dark:text-dark-secondary-text"}
                    `}
            >
                Next
            </button>
        </div>
    );
}
