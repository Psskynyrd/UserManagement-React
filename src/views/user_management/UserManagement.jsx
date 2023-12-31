import React, { useState, useEffect, Fragment, useRef } from "react";

import DataTable from "react-data-table-component";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button,
  TableFooter,
  TablePagination,
  Drawer,
  CircularProgress,
} from "@mui/material";
import moment from "moment/moment";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import { connect, useSelector, useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../../stores/users/users.action";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const UserManagement = () => {
  const [dataRow, setDataRow] = useState([]);
  const [isAddUser, setIsAddUser] = useState(false);
  const [isEditUser, setIsEditUser] = useState(false);
  const [userId, setUserId] = useState('')
  const userData = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);

  const dispatch = useDispatch();

  const toggleDrawer = (anchor, open) => (event) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //     return;
    // }

    setIsAddUser(open);
  };

  const onDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  useEffect(() => {
    dispatch(getUsers())
      .then(() => {
        console.log("userData", userData);
      })
      .catch((err) => {
        console.log(err);
      });

    setDataRow(userData);
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="flex justify-between  my-2">
          <h2 className="text-xl font-semibold">Users List</h2>
          <Button
            variant="contained"
            onClick={() => {
              setIsAddUser(true);
            }}
          >
            Add +
          </Button>
        </div>
        <div>
          {/* <DataTable
                        rows={data}
                        columns={columns}
                        fixedHeader
                        fixedHeaderScrollHeight='10px'
                        responsive
                    /> */}
          <TableContainer component={Paper}>
            <Table aria-label="users" sx={{ minWidth: 670 }}>
              <TableHead
                style={{
                  background: "lightgrey",
                }}
              >
                <TableRow>
                  <TableCell align="center">Profile Picture</TableCell>
                  <TableCell align="center">First name</TableCell>
                  <TableCell align="center">Last name</TableCell>
                  <TableCell align="center">Gender</TableCell>
                  <TableCell align="center">Birthday</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {}
                {loading ? (
                  <CircularProgress />
                ) : (
                  dataRow.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell
                        align="center"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Avatar
                          style={{
                            width: "4rem",
                            height: "4rem",
                          }}
                          alt="Profile Picture"
                          src={row.image}
                          {...stringAvatar(row.firstName + " " + row.lastName)}
                        />
                      </TableCell>
                      <TableCell align="center">{row.firstName}</TableCell>
                      <TableCell align="center">{row.lastName}</TableCell>
                      <TableCell align="center">{row.gender}</TableCell>
                      <TableCell align="center">
                        {moment(row.birthDate).format("DD MMM YYYY")}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          onClick={() => {
                            setIsEditUser(true);
                            setUserId(row.userId);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={(e) => {
                            onDelete(row.userId);
                          }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
              {/* <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        // colSpan={3}
                                        // count={rows.length}
                                        // rowsPerPage={rowsPerPage}
                                        // page={page}
                                        // SelectProps={{
                                        //     inputProps: {
                                        //         'aria-label': 'rows per page',
                                        //     },
                                        //     native: true,
                                        // }}
                                        // onPageChange={handleChangePage}
                                        // onRowsPerPageChange={handleChangeRowsPerPage}
                                        // ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableFooter> */}
            </Table>
          </TableContainer>
        </div>
        <div className="">
          <AddUser isAddUser={isAddUser} setIsAddUser={setIsAddUser} userData={userData} />
          <EditUser isEditUser={isEditUser} setIsEditUser={setIsEditUser} />
        </div>
      </div>
    </>
  );
};

// Map Redux state to component props
// const mapStateToProps = (state) => ({
//     users: state.users.users,
//     loading: state.users.loading,
//     error: state.users.error,
//   });

//   // Map action creators to component props
//   const mapDispatchToProps = {
//     getUsers,
//   };

// Connect component with Redux
//   export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
export default UserManagement;
