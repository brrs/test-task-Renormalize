"use client"

import { TableTopBar } from "./table-top-bar";
import { TableContent } from "./table-content";
import { TableBottomBar } from "./table-bottom-bar";
import React, { useMemo, useState } from "react";
import { useTable, Column, useGlobalFilter, useSortBy, usePagination } from "react-table";


export type Item = {
    trackingId: number;
    productImage: string;
    productName: string;
    customer: string;
    date: string;
    amount: number;
    paymentMode: string;
    status: string;
}

type TableProps = {
    data: Item[];
}

const getStatusClass = (status: string) => {
    switch (status) {
        case "Delivered":
            return "bg-status-delivered-bg dark:bg-status-delivered-bg text-status-delivered-text dark:text-status-delivered-text";
        case 'Cancelled':
            return "bg-status-canceled-bg dark:bg-status-canceled-bg text-status-canceled-text dark:text-status-canceled-text";
        case 'Process':
            return "bg-status-process-bg dark:bg-status-process-bg text-status-process-text dark:text-status-process-text";
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

const SortIcon = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.65132 7.83334H12.3493C12.924 7.83334 13.2293 7.15335 12.8473 6.72335L8.99865 2.39335C8.93622 2.32288 8.85955 2.26647 8.7737 2.22783C8.68786 2.1892 8.59479 2.16922 8.50065 2.16922C8.40651 2.16922 8.31344 2.1892 8.22759 2.22783C8.14175 2.26647 8.06508 2.32288 8.00265 2.39335L4.15265 6.72335C3.77065 7.15335 4.07598 7.83334 4.65132 7.83334ZM8.00198 14.606C8.06441 14.6765 8.14108 14.7329 8.22693 14.7715C8.31277 14.8102 8.40584 14.8301 8.49998 14.8301C8.59412 14.8301 8.68719 14.8102 8.77304 14.7715C8.85888 14.7329 8.93555 14.6765 8.99798 14.606L12.8466 10.276C13.2293 9.84668 12.924 9.16668 12.3486 9.16668H4.65132C4.07665 9.16668 3.77132 9.84668 4.15332 10.2767L8.00198 14.606Z" fill="#9E9E9E" />
    </svg>
)

export function Table({ data }: TableProps) {

    const [items, setItems] = useState<Item[]>(data);

    const columns: Column<Item>[] = useMemo(
        () => [
            {
                Header: () => (
                    <div className="flex justify-center">
                        <span>Tracking ID</span>
                    </div>
                ),
                accessor: "trackingId",
                Cell: ({ cell: { value } }) => (
                    <div className="flex justify-center w-full">
                        <span>#{value}</span>
                    </div>
                )
            },
            {
                Header: () => (
                    <div className="flex justify-between">
                        <span>Product</span>
                        <SortIcon />
                    </div>
                ),
                accessor: "productName",
                Cell: ({ row }) => (
                    <div className="flex items-center">
                        <img
                            src={row.original.productImage}
                            alt={row.original.productName}
                            className="h-8 w-8 min-w-8 min-h-8 object-fill rounded-lg"
                        />

                        <span className="overflow-hidden text-ellipsis whitespace-normal h-auto max-h-10 ml-2">{row.original.productName}</span>
                    </div>
                ),
            },
            {
                Header: () => (
                    <div className="flex justify-between">
                        <span>Customer</span>
                        <SortIcon />
                    </div>
                ),
                accessor: "customer"
            },
            {
                Header: () => (
                    <div className="flex justify-between">
                        <span>Date</span>
                        <SortIcon />
                    </div>
                ),
                accessor: "date",
                Cell: ({ row }) => (
                    <span className="whitespace-nowrap">{row.original.date.replace(/-/g, '/')}</span>
                )
            },
            {
                Header: "Amount",
                accessor: "amount",
                Cell: ({ row }) => (
                    <span>${row.original.amount}</span>
                )
            },
            {
                Header: "Payment Mode",
                accessor: "paymentMode"
            },
            {
                Header: () => (
                    <div className="flex justify-between">
                        <span>Status</span>
                        <SortIcon />
                    </div>
                ),
                accessor: "status",
                Cell: ({ cell: { value } }) => (
                    <div
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(value)}`}
                    >
                        {value}
                    </div>
                )
            },
            {
                Header: () => (
                    <div className="flex justify-center">
                        <span>Action</span>
                    </div>
                ),
                id: "action",
                Cell: ({ row }) => (
                    <div className="flex  justify-center space-x-3">
                        <button onClick={() => (console.log("it does nothing :("))}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.625 4H4.625C4.09457 4 3.58586 4.21071 3.21079 4.58579C2.83571 4.96086 2.625 5.46957 2.625 6V20C2.625 20.5304 2.83571 21.0391 3.21079 21.4142C3.58586 21.7893 4.09457 22 4.625 22H18.625C19.1554 22 19.6641 21.7893 20.0392 21.4142C20.4143 21.0391 20.625 20.5304 20.625 20V13" stroke="#624DE3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.125 2.50001C19.5228 2.10219 20.0624 1.87869 20.625 1.87869C21.1876 1.87869 21.7272 2.10219 22.125 2.50001C22.5228 2.89784 22.7463 3.4374 22.7463 4.00001C22.7463 4.56262 22.5228 5.10219 22.125 5.50001L12.625 15L8.625 16L9.625 12L19.125 2.50001Z" stroke="#624DE3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                        <button onClick={() => handleDelete(row.original.trackingId)}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.625 6H5.625H21.625" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.625 6V4C8.625 3.46957 8.83571 2.96086 9.21079 2.58579C9.58586 2.21071 10.0946 2 10.625 2H14.625C15.1554 2 15.6641 2.21071 16.0392 2.58579C16.4143 2.96086 16.625 3.46957 16.625 4V6M19.625 6V20C19.625 20.5304 19.4143 21.0391 19.0392 21.4142C18.6641 21.7893 18.1554 22 17.625 22H7.625C7.09457 22 6.58586 21.7893 6.21079 21.4142C5.83571 21.0391 5.625 20.5304 5.625 20V6H19.625Z" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.625 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.625 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                    </div>
                )
            },
        ],
        [items]
    );

    const tableInstance = useTable({
        columns: columns,
        data: items,
        initialState: { pageIndex: 0, pageSize: 10 }
    },
        useGlobalFilter, // Пошук
        useSortBy, // Сортування
        usePagination // Пагінація
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setGlobalFilter,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        setPageSize,
        gotoPage,
        pageCount
    } = tableInstance;

    const { globalFilter, pageIndex, pageSize } = state;

    // Update page size and index when rowsPerPage or pageIndex changes
    React.useEffect(() => {
        setPageSize(pageSize);
        console.log(pageSize)
    }, [pageSize, setPageSize]);

    React.useEffect(() => {
        gotoPage(pageCount);
    }, [pageCount, gotoPage]);

    const handleDelete = (id: number) => {
        setItems((oldData) => oldData.filter((item) => item.trackingId !== id));
    };

    return (
        <div className="flex h-full items-center justify-center font-sans">
            <div className="w-full max-w-7xl ">
                <TableTopBar
                    rowsPerPage={pageSize}
                    onPageSizeChange={setPageSize}
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
                <TableContent
                    items={items}
                    getTableBodyProps={getTableBodyProps}
                    headerGroups={headerGroups}
                    page={page}
                    prepareRow={prepareRow}
                />
                <TableBottomBar
                    tableInstance={tableInstance}
                />
            </div>
        </div>
    );
}
