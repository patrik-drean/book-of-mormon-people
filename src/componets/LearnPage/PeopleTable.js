import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import peopleData from '../../data/people_data'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    backgroundColor: 'inherit'
  },
  table: {
    minWidth: 650
  },
  tableCell: {
    color: 'white'
  },
  tableHeader: {
    fontSize: '30px',
    color: 'white'
  }
}))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = peopleData

function PeopleTable() {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableHeader}>Person</TableCell>
            <TableCell className={classes.tableHeader}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell
                className={classes.tableCell}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {row.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default PeopleTable
