import FilterForm from './FilterForm';

export const COLUMNS = [
    {
        Header: "Name",
        accessor: "name",
        Filter: FilterForm

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