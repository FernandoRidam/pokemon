import React from 'react';

import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';

import columns from '../../utils/tableColumns.json';

import useStyles from './styles';

export function PokeTable({ children }) {
  const Styles = useStyles();

  return (
    <TableContainer className={ Styles.table } component={ Paper }>
      <Table>
        <TableHead>
          <TableRow>
            {
              columns.map( column =>
                <TableCell
                  key={ column.id }
                  variant="head"
                  align={ column.align }
                >
                  { column.label }
                </TableCell>)
            }
          </TableRow>
        </TableHead>

        <TableBody>
          { children }
        </TableBody>
      </Table>
    </TableContainer>
  );
};
