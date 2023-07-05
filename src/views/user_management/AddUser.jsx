import React, { useState } from 'react'
import { Avatar, Button, Drawer, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Flatpikr from 'react-flatpickr'

import "flatpickr/dist/themes/material_green.css";

const AddUser = ({ isAddUser, setIsAddUser }) => {
    const [startDate, setStartDate] = useState(new Date())

    return (
        <>
            <Drawer
                anchor='bottom'
                open={isAddUser}
                onClose={() => setIsAddUser(false)}
                style={{
                    height: '10rem'
                }}
            >
                <div className="container my-10 mx-6">
                    <div className="">
                        <div className="mb-4">Create New User</div>
                    </div>
                    <div className="">
                        <Grid2 container spacing={2} >
                            <Grid2 xs={4}>
                                <Avatar style={{
                                    width: '10rem',
                                    height: '10rem'
                                }} src="" />
                            </Grid2>
                            <Grid2 xs={8}>
                                <div className="flex justify-evenly my-4">
                                    <TextField variant="outlined" label="First Name" />
                                    <TextField variant="outlined" label="Last Name" />
                                </div>
                                <div className="flex  justify-evenly my-4 rounded-md">
                                    <TextField variant="outlined" label="Gender" />
                                    <Flatpikr
                                        className='border-2'
                                        value={startDate}
                                        onChange={(date) => setStartDate(date)}

                                    />
                                </div>
                            </Grid2>
                        </Grid2>
                    </div>
                    <div className="flex justify-between mt-4 mx-10">
                        <div className="grid">
                            <Button variant='contained'  >Upload Profile Picture</Button>
                            <Button variant='contained' color='error'>Delete Picture</Button>
                        </div>
                        <div>
                            <Button variant='contained' onClick={() => {
                                setIsAddUser(false)
                            }} >Cancel</Button>
                            <Button variant='contained' color='success'>Save</Button>
                        </div>
                    </div>
                </div>
            </Drawer >
        </>
    )
}

export default AddUser
