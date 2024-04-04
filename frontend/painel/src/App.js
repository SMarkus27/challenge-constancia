import React, {useState, useEffect, useMemo} from "react";
import axios from "axios"
import { useTable, useGlobalFilter, useSortBy } from "react-table";

import "./App.css";
import FilterForm from "./components/FilterForm";
import {COLUMNS} from "./components/columns";
function Table ({columns, data}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        state,
        setGlobalFilter,
        prepareRow
    } = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy)

    const { globalFilter} = state;
    return (
        <div>
            <div className="search-container">
                <input className="input-search"
                    placeholder="Buscar"
                    type="text"
                    value={globalFilter || ''}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                />
            </div>
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
                                            : '🔼'
                                        : ":"}
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
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            })}
                        </tr>
                    )
                })}

                </tbody>
            </table>
        </div>
    )
}


function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios("http://localhost:8000/clients").then((res) => {
            setData(res.data.data)
        }).catch((err) => console.log(err))
    }, []);

    const columns = useMemo(() => COLUMNS, [])
    return (
        <div className="App">
            <h1>
                <center>Débitos Clientes</center>
            </h1>
            <Table columns={columns} data={data}/>
        </div>
    )
}


export default App;