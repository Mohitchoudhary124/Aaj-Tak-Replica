import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState, useEffect } from 'react'

export default function CustomizedSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
      <Snackbar open={open}  onClose={handleClose} style={{ position: 'fixed', top: '5%', marginTop: '50px', marginLeft: '220px', position:'relative',Width:'500px'}}  >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '800px',bgcolor: '#d90000',
          color: 'white',borderRadius:'30px' }}
        >
          BREAKING NEWS |
अभिषेक दांगी की याचिका खारिज करने के पटना HC के आदेश में हस्तक्षेप करने से SC का इनकार
        </Alert>
      </Snackbar>
    </div>
  );
}
