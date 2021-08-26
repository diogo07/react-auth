import { TextField } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
    },
  },
});


function TextInput({ label, input, type, variant, required, meta: { touched, invalid, error }, ...custom }) {

  const classes = styles();

  return (
    <TextField
      margin="normal"
      label={label}
      placeholder={label}
      type={type}
      variant={variant}
      error={touched && invalid}
      helperText={touched && error}
      fullWidth={true}
      required={required}
      InputProps={ {
        classes: classes.root,
    } }
      {...input}
      {...custom}
    />
  )
}

export default TextInput;
