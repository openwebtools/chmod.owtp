import React from 'react';
import SubjectHeader from '../src/components/subjectHeader';
import {TableContainer, TableHead, TableRow, TableCell, TableBody, Table, makeStyles, Checkbox, Box} from '@material-ui/core';
import PermissionInput from '../src/components/permissionInput';
import PermissionService from '../src/utils/permissionService';
import { PermissionModel, PermissionLoggingOptions } from '../src/models/permissionModel';

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
  tableWrapper: {
    marginTop: '20px',
  },
});

const permissionService = new PermissionService();

const Calculator = () => {

  const header = {
    header: 'chmod calculator',
    subHeader: 'An easy to use, simple chmod calculator',
  };

  const [permissionString, setPermissionString] = React.useState('chmod 000');

  const classes = useStyles({});
  
  const [perms, setPerms] = React.useState<PermissionModel>({
    owner: [0, 0, 0],
    group: [0, 0, 0],
    all: [0, 0, 0,],
    setgid: false,
    setuid: false,
    stickybit: false,
    fileOptions: {
      folderOptions: {
        recursive: false,
        preserveRoot: false
      },
      referenceFile: ''
    },
    logging: PermissionLoggingOptions.Default
  });

  const handlePermChange = (event, index: number) => {
    var newPerms = {...perms};
    newPerms[event.target.name][index] = Number(event.target.checked);
    setPermissionString(permissionService.computeCommand(newPerms, true));
    setPerms(newPerms);
  };

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
                  <Checkbox checked={Boolean(perms.owner[0])} name="owner" onChange={(e) => handlePermChange(e, 0)}/>
                </TableCell>
                <TableCell align="center">
                  <Checkbox checked={Boolean(perms.group[0])} name="group" onChange={(e) => handlePermChange(e, 0)}/>
                </TableCell>
                <TableCell align="center">
                  <Checkbox checked={Boolean(perms.all[0])} name="all" onChange={(e) => handlePermChange(e, 0)}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Write</TableCell>
                <TableCell align="center">
                  <Checkbox checked={Boolean(perms.owner[1])} name="owner" onChange={(e) => handlePermChange(e, 1)}/>
                </TableCell>
                <TableCell align="center">
                  <Checkbox checked={Boolean(perms.group[1])} name="group" onChange={(e) => handlePermChange(e, 1)}/>
                </TableCell>
                <TableCell align="center">
                  <Checkbox checked={Boolean(perms.all[1])} name="all" onChange={(e) => handlePermChange(e, 1)}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">
                  <Checkbox checked={Boolean(perms.owner[2])} name="owner" onChange={(e) => handlePermChange(e, 2)}/>
                </TableCell>
                <TableCell align="center">
                  <Checkbox checked={Boolean(perms.group[2])} name="group" onChange={(e) => handlePermChange(e, 2)}/>
                </TableCell>
                <TableCell align="center">
                  <Checkbox checked={Boolean(perms.all[2])} name="all" onChange={(e) => handlePermChange(e, 2)}/>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <PermissionInput permissionValue={permissionString}/>
      </Box>
    </div>
  );
};

export default Calculator;
