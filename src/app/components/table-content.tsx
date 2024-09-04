import React, { useState } from "react";
import { useTable, Column, HeaderGroup, Row } from "react-table";
import { Item } from "./table"

type TableContentProps = {
    items: Item[];
    getTableBodyProps: any;
    headerGroups: HeaderGroup<Item>[];
    page: Row<Item>[];
    prepareRow: any;
};

export function TableContent({ items, headerGroups, getTableBodyProps, page, prepareRow }: TableContentProps) {
    return (
        <div>
            <table className="w-full table-fixed bg-primary dark:bg-dark-primary 
            text-primary-text dark:text-dark-primary-text">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className="px-4">
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="px-1 py-2 w-1/8 text-left text-sm font-bold tracking-wider whitespace-nowrap"
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        const rowBackgroundColor = i % 2 !== 0 ? 
                        "bg-primary dark:bg-dark-primary" : "bg-secondary dark:bg-dark-secondary";
                        return (
                            <tr {...row.getRowProps()} className={`h-16  ${rowBackgroundColor}`}>
                                {row.cells.map(cell => (
                                    <td
                                        {...cell.getCellProps()}
                                        className="w-1/8 px-1 text-sm font-medium whitespace-nowrap truncate"
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}