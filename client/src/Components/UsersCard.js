import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './Style.css';

import { useDispatch, useSelector } from 'react-redux';
import { getallusers } from '../JS/Actions/admin';



const UsersCard = () => {
  const listusers = useSelector((state) => state.adminReducer.listusers);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getallusers());
  }, [dispatch]);

  return (
    <div className='Table'>
       <TableContainer component={Table} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow > 
            <TableCell className='table'>Utilisateurs</TableCell>
            <TableCell align="left" className='table'>Nom</TableCell>
            <TableCell align="left" className='table'>Prénom</TableCell>
            <TableCell align="left" className='table'>Téléphone</TableCell>
            <TableCell align="left" className='table'>Adresse e-mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
        {listusers.map((user) => (
            <TableRow
              key={user._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar/>
              </TableCell>
              <TableCell align="left">{user.secondname}</TableCell>
              <TableCell align="left">{user.firstname}</TableCell>
              <TableCell align="left">{user.phone}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="left"><DeleteIcon/></TableCell>
            </TableRow>
          ))}   
        </TableBody>
      </Table>
    </TableContainer> 





       
    </div> 
  );
};

export default UsersCard;
