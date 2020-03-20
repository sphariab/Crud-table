import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableSortLabel, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import getBirds from './data'
import Input from './Input'
import styles from '../styles/TableStyle'

class AnimalsTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: {name: '', id: null, members: "Wandering albatross"},
      selected: '',
      birds: getBirds(),
    }
  }

  updateData = () => {
    let birds = this.state.birds
    let inputValue = this.state.inputValue

    if (!inputValue['id']) {
      birds = birds.concat([{name: inputValue.name, id: Math.random(), members: "Penguins"}])
    } else {
      birds.map(bird => bird.id === inputValue.id ? bird.name = inputValue.name : null )
    }

    this.setState({ birds })
    this.clearInputValue()
  }

  clearInputValue = () => {
    this.setState({ inputValue: {name: '', id: null, members: "Wandering albatross" } })
  }

  handleChange = (e) => {
    let inputValue = this.state.inputValue
    inputValue.name = e.target.value
    this.setState({ inputValue })
  }

  selectRow = (row) => {
    let rowCopy = Object.assign({}, row)
    this.setState({ inputValue: rowCopy })
  }

  moveInputValueBack = () => {
    let birds = this.state.birds
    let inputValue = this.state.inputValue
    birds.map(bird => bird.id === inputValue.id ? inputValue.name = bird.name : null)
    this.setState({ birds })
  }

  uploadDataBack = () => {
    this.setState({birds: getBirds() })
  }

  removeData = (id) => {
    let birds = this.state.birds
    birds = birds.filter(bird =>  bird.id !== id)
    this.setState({ birds })
  }

  sort = (name) => {
    let birds = this.state.birds

    birds = birds.sort((a, b) => {
      if (a[name] < b[name]) return - 1
      if (a[name] > b.name) return  1
      return 0
    })
    this.setState({ birds })
  }

  render () {
    const {inputValue, birds} = this.state
    const {classes} = this.props

    return (
      <>
        <TableContainer
          component={Paper}
          className={classes.tableWrapper}
        >
          <h1>Birds of Antarctica</h1>
          <Input
            inputValue={inputValue}
            handleChange={this.handleChange}
            moveInputValueBack={this.moveInputValueBack}
            updateData={this.updateData}
          />
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={true}
                    onClick={() => this.sort('id')}
                  >
                  Id
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={true}
                    onClick={() => this.sort('name')}
                  >
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={true}
                    onClick={() => this.sort('members')}
                  >
                    Members
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <Button
                    className={classes.greenBtn}
                    onClick={this.uploadDataBack}>Upload Back</Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {birds && birds.map(row => (
                <TableRow
                  key={row.id}>
                  <TableCell
                    onClick={() => this.selectRow(row)}
                  >{row.id}
                  </TableCell>
                  <TableCell
                    onClick={() => this.selectRow(row)}
                    className={classes.name}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    onClick={() => this.selectRow(row)}
                    component="th"
                    scope="row"
                  >
                    {row.members}
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={ () => this.removeData(row.id) }
                      className={classes.close}
                      aria-hidden="true"
                    >
                     <CloseIcon />
                    </span>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default withStyles(styles)(AnimalsTable)
