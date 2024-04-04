import React, {useState, useEffect, useMemo} from "react";
import axios from "axios"
import { useTable, useFilters, useSortBy } from "react-table";

import "./App.css";
import FilterForm from "./FilterForm";
function Table ({columns, data}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    }, useSortBy)
    return (
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
                                        :":"}
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
    )
}


function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios("http://localhost:8000/clients").then((res) => {
            setData(res.data.data)
        }).catch((err) => console.log(err))
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: "Buscar",
                columns: [
                    {
                        Header: "Name",
                        accessor: "name",
                        Filter: FilterForm
                        // Cell: ({cell: {value}}) => value ? {value}: ""

                    },
                    {
                        Header: "Valor",
                        accessor: "value",
                        Filter: FilterForm

                    },
                    {
                        Header: "Desde",
                        accessor: "created_at",
                        Filter: FilterForm


                    }
                ]
            }
        ]
    )
    return (
        <div className="App">
            <h1><center>React</center></h1>
            <Table columns={columns} data={data}/>
        </div>
)
}


export default App;