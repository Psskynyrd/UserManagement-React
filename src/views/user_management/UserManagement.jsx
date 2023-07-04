import React, { useState, useEffect } from 'react'

import DataTable from 'react-data-table-component'

const columns = [
    {
        name: 'Profile Picture',
        selector: row => row.image,
        width: 70
    },
    {
        name: 'First name',
        selector: row => row.firstName,
        width: 70
    },
    {
        name: 'Last name',
        selector: row => row.lastName,
        width: 70
    },
    {
        name: 'Gender',
        selector: row => row.gender,
        width: 70
    },
    {
        name: 'Birthday',
        selector: row => row.birthDate,
        width: 70
    },
    {
        name: 'Actions',
        cell: (row, index, column, id) => {
            return (
                <>
                    <div className="">Button</div>
                </>
            )
        },
        width: 70
    },
]

const data = [
    {
        image: '',
        firstName: 'Tset',
        lastName: 'test',
        gender: 'Male',
        birthDate: '15/07/99'
    },
    {
        image: '',
        firstName: 'Tset',
        lastName: 'test',
        gender: 'Male',
        birthDate: '15/07/99'
    },
    {
        image: '',
        firstName: 'Tset',
        lastName: 'test',
        gender: 'Male',
        birthDate: '15/07/99'
    },
    {
        image: '',
        firstName: 'Tset',
        lastName: 'test',
        gender: 'Male',
        birthDate: '15/07/99'
    },
]

const UserManagement = () => {

    const [dataRow, setDataRow] = useState([])

    useEffect(() => {
        setDataRow(data)
        console.log(data);
        console.log(dataRow);
    }, [])

    return (
        <>
            <div>
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">Users List</h2>
                    <button className="rounded-md bg-sky-400 py-2 px-4 text-white">Add+</button>
                </div>
                <div>
                    <DataTable
                        rows={dataRow}
                        columns={columns}
                    />
                </div>
            </div>
        </>
    )
}

export default UserManagement