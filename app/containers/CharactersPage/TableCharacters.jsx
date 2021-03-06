/**
 * containers/CharactersPages/TableCharacters.jsx
 * @author Bruno Prdt
 */
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#d90018',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // eslint-disable-next-line react/prop-types
  const rows = props.characters;
  const columns = [
    {
      id: 'id',
      label: 'id',
      minWidth: 60,
      align: 'right',
      format: value => value.toLocaleString(),
    },
    { id: 'name', label: 'Nom', minWidth: 110 },
    {
      id: 'description',
      label: 'Description',
      minWidth: 210,
    },
    {
      id: 'modified',
      label: 'Date',
      minWidth: 110,
      align: 'right',
      format: value => value.toLocaleDateString(),
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper className={classes.root} id="charactersPaper">
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
              <StyledTableCell
                key="Comics"
                align="right"
                style={{ minWidth: 110 }}
              >
                Comics
              </StyledTableCell>
              <StyledTableCell
                key="Apperçu"
                align="right"
                style={{ minWidth: 110 }}
              >
                Apperçu
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <NavLink to={`characterbyid/${row.id}`}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </NavLink>
                      </TableCell>
                    );
                  })}
                  <TableCell key={row.id} align="right">
                    {row.comics.available}
                  </TableCell>
                  <TableCell key={row.name} align="right">
                    <a href={`characterbyid/${row.id}`}>
                      <img
                        src={`${row.thumbnail.path}.${row.thumbnail.extension}`}
                        alt={row.name}
                        style={{ width: 100 }}
                      />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
