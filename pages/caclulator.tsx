import React from 'react';
import SubjectHeader from '../src/components/subjectHeader';
import {TableContainer, TableHead, TableRow, TableCell, TableBody, Table, makeStyles, Checkbox, Box} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
  tableWrapper: {
    marginTop: '20px',
  },
});

const Calculator = () => {
  const header = {
    header: 'chmod calculator',
    subHeader: 'An easy to use, dead simple chmod calculator',
  };

  const classes = useStyles({});
  return (
    <div>
      <SubjectHeader {...header}/>
      <Box borderTop={1} borderBottom={0} borderColor="grey.700" className="tableWrapper">
        <TableContainer>
          <Table className={classes.table} aria-label="permission table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Permissions</TableCell>
                <TableCell align="center">Owner</TableCell>
                <TableCell align="center">Group</TableCell>
                <TableCell align="center">All</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">Read</TableCell>
                <TableCell align="center">
                  <Checkbox/>
                </TableCell>
                <TableCell align="center">
                  <Checkbox/>
                </TableCell>
                <TableCell align="center">
                  <Checkbox/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Write</TableCell>
                <TableCell align="center">
                  <Checkbox/>
                </TableCell>
                <TableCell align="center">
                  <Checkbox/>
                </TableCell>
                <TableCell align="center">
                  <Checkbox/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">
                  <Checkbox/>
                </TableCell>
                <TableCell align="center">
                  <Checkbox/>
                </TableCell>
                <TableCell align="center">
                  <Checkbox/>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Calculator;
