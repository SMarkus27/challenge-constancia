import React from "react";
import { useTable } from "react-table";
import {useGlobalFilter} from "react-table/src";

export default function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        state,
        setGlobalFilter,
        prepareRow,
    } = useTable({
        columns,
        data,
    }, useGlobalFilter)

    const { globalFilter } = state;
    return (
        <div className="container">
            {/*<div className="search-container">*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        value={globalFilter || ''}*/}
            {/*        onChange={(e) => setGlobalFilter(e.target.value)}*/}
            {/*    />*/}
            {/*</div>*/}
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? ' 🔽'
                                            : '🔼' : ":"}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return cell.render("Cell")
                            })}
                        </tr>
                    )
                })}

                </tbody>
            </table>
        </div>
    )
}
