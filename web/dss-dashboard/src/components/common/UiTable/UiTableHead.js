import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import toolbarStyles from './UiTableHeaderStyle'

class UiTableHead extends Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, columnData, needHash, needCheckBox } = this.props;
    return (
      <TableHead className={classes.root}>
        <TableRow>
          {/* {
            needCheckBox ?
              <TableCell
                style={{ width: this.props.width ? this.props.width : 'auto' }}>
                <Checkbox
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={numSelected > 0 && numSelected === rowCount}
                  onChange={onSelectAllClick}
                />
              </TableCell>
              :
              null
          }
          {
            needHash ?
              <TableCell style={{ width: this.props.width ? this.props.width : 'auto' }}>
                <span>#</span>
              </TableCell>
              :
              <TableCell style={{ width: this.props.width ? this.props.width : 'auto' }}>
                <span></span>
              </TableCell>
          } */}

          {columnData.map((column, idx) => {
            return (
              <TableCell
                key={column.id}
                // stickyHeader={column.stickyHeader}
                align={column.numeric ? 'left' : 'left'}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
                style={{ width: this.props.width ? this.props.width : 'auto' }}
              >
                <TableSortLabel
                  style={{ flexDirection: "row" }}
                  active={orderBy === column.id}
                  direction={order}
                  onClick={this.createSortHandler(column.id)}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            );
          }, this)}
          {/* <TableCell style={{ width: this.props.width ? this.props.width : 'auto', minWidth: 100 }}>
            {searchComponent}
          </TableCell> */}
        </TableRow>
      </TableHead>
    );
  }
}


export default withStyles(toolbarStyles)(UiTableHead);