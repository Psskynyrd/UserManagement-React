import React, { useState } from "react";
import { Avatar, Button, Drawer, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Flatpikr from "react-flatpickr";

import "flatpickr/dist/themes/material_green.css";
import { useDispatch } from "react-redux";
import moment from "moment";
import { createUser } from "../../stores/users/users.action";

const AddUser = ({ isAddUser, setIsAddUser }) => {
  const [startDate, setStartDate] = useState(new Date("DD/MM/YYYY"));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDay, setBirthday] = useState("");
  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(createUser({ firstName, lastName, gender, birthDate: birthDay }))
        .then(() =>{
            console.log('Successfully saved');
            setIsAddUser(false)
        });
  };

  return (
    <>
      <Drawer
        anchor="bottom"
        open={isAddUser}
        onClose={() => setIsAddUser(false)}
        style={{
          height: "10rem",
        }}
      >
        <div className="container my-10 mx-6">
          <div className="">
            <div className="mb-4">Create New User</div>
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
                    onInput={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <TextField
                    variant="outlined"
                    label="Last Name"
                    onInput={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <div className="flex  justify-evenly my-4 rounded-md">
                  <TextField
                    variant="outlined"
                    label="Gender"
                    onInput={(e) => {
                      setGender(e.target.value);
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
                  setIsAddUser(false);
                }}
              >
                Cancel
              </Button>
              <Button variant="contained" color="success"
              onClick={() => {
                onSave();
              }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AddUser;
