import React, { useState } from 'react'
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Flatpikr from 'react-flatpickr'

import "flatpickr/dist/themes/material_green.css";

const EditUser = ({ isEditUser, setIsEditUser }) => {
    const [startDate, setStartDate] = useState(new Date())
    const [isSaveDialog, setIsSaveDialog] = useState(true)

    return (
        <>
            <Drawer
                anchor='bottom'
                open={isEditUser}
                onClose={() => setIsEditUser(false)}
                style={{
                    height: '10rem'
                }}
            >
                <div className="container my-10 mx-6">
                    <div className="">
                        <div className="mb-4">Edit User</div>
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
                                    <TextField
                                        variant="outlined"
                                        label="First Name"

                                    />
                                    <TextField
                                        variant="outlined"
                                        label="Last Name"
                                    // error={state.errorText.length === 0 ? false : true}
                                    />
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

                                setIsEditUser(false)
                            }} >Cancel</Button>
                            <Button variant='contained' color='success'
                                onClick={() => {
                                    setIsSaveDialog(true)
                                    console.log(isSaveDialog);
                                }}>Save</Button>
                        </div>
                        <Dialog
                            open={isSaveDialog}
                            onClose={() => setIsSaveDialog(false)}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Use Google's location service?"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Let Google help apps determine location. This means sending anonymous
                                    location data to Google, even when no apps are running.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => {
                                    setIsSaveDialog(false)
                                    setIsEditUser(false)
                                }}>Disagree</Button>
                                <Button onClick={() => setIsSaveDialog(false)} autoFocus>
                                    Agree
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </Drawer >
        </>
    )
}

export default EditUser