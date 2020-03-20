import React from 'react';
import { TextField, Button, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/InputStyle'

const Input = ({classes, moveInputValueBack, inputValue, handleChange, updateData}) => (
  <>
    <span
      className={classes.back}
      onClick={moveInputValueBack}>&#10226;
    </span>
    <div className={classes.inputWrapper}>
      <InputLabel htmlFor="component-helper">Name</InputLabel>
      <TextField
        type="text"
        name="nameId"
        id="id"
        onChange={handleChange}
        value={inputValue.name}
      />
    </div>
    <Button
      color="primary"
      onClick={updateData}
      className={classes.blueBtn}
    >
      Save
    </Button>
  </>
)

export default withStyles(styles)(Input)

