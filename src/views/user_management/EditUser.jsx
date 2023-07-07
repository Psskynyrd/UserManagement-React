import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Flatpikr from "react-flatpickr";

import "flatpickr/dist/themes/material_green.css";
import { useDispatch } from "react-redux";
import { updateUser } from "../../stores/users/users.action";
import moment from "moment";

const EditUser = ({ isEditUser, setIsEditUser, userData }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isSaveDialog, setIsSaveDialog] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDay, setBirthday] = useState("");
  const [user, setUser] = useState({})
  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(
      updateUser(userId, { firstName, lastName, gender, birthDate: birthDay })
    ).then(() => {
      console.log("Successfully saved");
      setIsEditUser(false);
    });
  };

  useEffect(() => {
    setUser(userId)
  })
  
  return (
    <>
      <Drawer
        anchor="bottom"
        open={isEditUser}
        onClose={() => setIsEditUser(false)}
        style={{
          height: "10rem",
        }}
      >
        <div className="container my-10 mx-6">
          <div className="">
            <div className="mb-4">Edit User</div>
          </div>
          <div className="">
            <Grid2 container spacing={2}>
              <Grid2 xs={4}>
                <Avatar
                  style={{
                    width: "10rem",
                    height: "10rem",
                  }}
                  src=""
                />
              </Grid2>
              <Grid2 xs={8}>
                <div className="flex justify-evenly my-4">
                  <TextField
                    variant="outlined"
                    label="First Name"
                    value={userData}
                    onInput={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <TextField
                    variant="outlined"
                    label="Last Name"
                    onInput={(e) => {
                      setFirstName(e.target.value);
                    }}
                    // error={state.errorText.length === 0 ? false : true}
                  />
                </div>
                <div className="flex  justify-evenly my-4 rounded-md">
                  <TextField
                    variant="outlined"
                    label="Gender"
                    onInput={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <Flatpikr
                    className="border-2"
                    value={startDate}
                    onChange={(date) => {
                      setStartDate(date);

                      var birthDay = moment(
                        date,
                        "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (z)"
                      ).format("DD/MM/YYYY");
                      setBirthday(birthDay);
                    }}
                  />
                </div>
              </Grid2>
            </Grid2>
          </div>
          <div className="flex justify-between mt-4 mx-10">
            <div className="grid">
              <Button variant="contained">Upload Profile Picture</Button>
              <Button variant="contained" color="error">
                Delete Picture
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => {
                  setIsEditUser(false);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  setIsSaveDialog(true);
                }}
              >
                Save
              </Button>
            </div>
            <Dialog
              open={isSaveDialog}
              onClose={() => setIsSaveDialog(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Update user"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Save ?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    setIsSaveDialog(false);
                    setIsEditUser(false);
                  }}
                >
                  Disagree
                </Button>
                <Button
                  onClick={() => {
                    setIsSaveDialog(false);
                    onSave();
                  }}
                  autoFocus
                >
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default EditUser;
