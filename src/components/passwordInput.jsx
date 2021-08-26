import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

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


function PasswordInput({ label, input, type, variant, required, meta: { touched, invalid, error }, ...custom }) {

    const classes = styles();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <TextField
            margin="normal"
            label={label}
            placeholder={label}
            type={showPassword ? "text" : "password"}
            variant={variant}
            error={touched && invalid}
            helperText={touched && error}
            fullWidth={true}
            required={required}
            InputProps={{
                classes: classes.root,
                endAdornment:
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>

            }
            }


            {...input}
            {...custom}
        />
    )
}

export default PasswordInput;
