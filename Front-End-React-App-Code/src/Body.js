import logo from './logo.svg';
import './App.css';

import React from 'react';
import clsx from 'clsx';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';

function createData(id, name, named_by) {
  return { id, name, named_by };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'treeid', numeric: false, disablePadding: true, label: 'Tree ID' },
  { id: 'tree_name', numeric: true, disablePadding: false, label: 'Tree Name' },
  { id: 'named_by', numeric: true, disablePadding: false, label: 'Named By' },
];

function EnhancedTableHead(props) {

  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Tree Information
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export function Body(props) {

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [treeName, setTreeName] = React.useState("");
  const [treeId, setTreeId] = React.useState(0);
  const [loggedInCustomerName, setLoggedInCustomerName] = React.useState("");
  const [rows, setTreeRows] = React.useState([]);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  function reFetchListBasedOnCheckBoxState() {

    if(props.myProp.un_named_trees == true) {
      fetchUnNamedTreeInfoPage();
    } else if (props.myProp.named_trees == true) {
      fetchTreesNamedInfoPage();
    } else if (props.myProp.trees_named_by_me == true) {
      fetchTreesNamedByMePage();
    } else if(props.myProp.trees_named_by_user == true && props.myProp.customerName != "") {
      fetchTreesNamedByUserPage();
    } else {
      fetchTreeInfoPage();
    }

  }

  async function handleClose () {

    console.log(treeName)
    console.log(treeId)
    console.log(loggedInCustomerName)

    let url = 'https://00q7n7ycb3.execute-api.us-west-2.amazonaws.com/Dev?';
    url = url + "tree_id=" + treeId;
    url = url + "&tree_name=" + treeName;
    url = url + "&customer_name=" + loggedInCustomerName;
    url = encodeURI(url);

    fetch(url)
        //.then(response => response.json())
        .then(response => response.json())
        .then(data => {console.log(data.result)} )

    setOpen(false);

    reFetchListBasedOnCheckBoxState();

    setPage(page + 1);

    // forceUpdate();
  };

  function getDataFromArrays (array) {
    let rows = []
    for(let i = 0 ;i < array.length; i++) {
      let element = array[i];

      let tree_id = element[0];
      let tree_name = element[1];
      let named_by = element[2];

      let data = createData(tree_id, tree_name, named_by);
      rows.push(data);

    }
    return rows;
  }

  async function fetchTreesNamedInfoPage() {

    let page_number = page
    let url = 'https://ul8jj6g53h.execute-api.us-west-2.amazonaws.com/Dev?page_number=';
    url = url + page_number;

    setTreeRows([])
    fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data.result)
          let array = JSON.parse(data.result);
          let rows = getDataFromArrays(array);
          setTreeRows(rows);
    } )
  }

  async function fetchTreesNamedByUserPage() {

    let page_number = page
    let url = 'https://0z3d2olyda.execute-api.us-west-2.amazonaws.com/Dev?customer_name=';
    url = url + props.myProp.customer_name + "&page_number="
    url = url + page_number

    url = encodeURI(url);
  
    setTreeRows([])
    fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data.result)
          let array = JSON.parse(data.result);
          let rows = getDataFromArrays(array);
          setTreeRows(rows);
    } )
  }

  async function fetchTreesNamedByMePage() {

    let page_number = page
    setTreeRows([])
    let url = 'https://0z3d2olyda.execute-api.us-west-2.amazonaws.com/Dev?customer_name=';
    url = url + loggedInCustomerName + "&page_number="
    url = url + page_number

    url = encodeURI(url);

    fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data.result)
          let array = JSON.parse(data.result);
          let rows = getDataFromArrays(array);
          setTreeRows(rows);
    } )    
  }

  async function fetchUnNamedTreeInfoPage() {

    let page_number = page
    let url = 'https://x5jiirt94l.execute-api.us-west-2.amazonaws.com/Dev?page_number=';
    url = url + page_number;

    setTreeRows([])
    fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data.result)
          let array = JSON.parse(data.result);
          let rows = getDataFromArrays(array);
          setTreeRows(rows);
    } )    
  }

 async function fetchTreeInfoPage() {

    let page_number = page;
    let url = 'https://n6khjm2uoe.execute-api.us-west-2.amazonaws.com/Dev?page_number=';
    url = url + page_number;

    setTreeRows([])
    fetch(url)
        //.then(response => response.json())
        .then(response => response.json())
        .then(data => {
          console.log(data.result)
          let array = JSON.parse(data.result);
          let rows = getDataFromArrays(array);
          setTreeRows(rows);
    } )    
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() => {
    console.log("body.js useeffect")
    setLoggedInCustomerName(props.myProp.logged_in_user_name);
    reFetchListBasedOnCheckBoxState();
  }, []);

  const handleClick = (event, id) => {
    setTreeId(id);
    setOpen(true);

  };

  const setTextValue = (event) => {
    setTreeName(event.target.value);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    
    <div className={classes.root}>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Tree Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name of the tree.
          </DialogContentText>
          <TextField
            onChange={setTextValue}
            autoFocus
            margin="dense"
            id="name"
            label="Tree Name"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              // onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {

                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Tooltip title="Click to add Tree Name"><AddIcon onClick={handleClick}></AddIcon></Tooltip>
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.named_by}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </div>
  );
}



export default Body;
