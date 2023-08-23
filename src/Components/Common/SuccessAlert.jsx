import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="top" ref={ref} {...props} />;
});

const SuccessAlert = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
                style: {
                    position: 'absolute', top: '45%', left: '48%', width: "500px",
                    transform: 'translate(-50%, -50%)', color: 'black', padding: "10px 0 10px 10px",
                }
            }}
            BackdropProps={{
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Change the background color if needed
                },
            }}
        >
            <DialogTitle>{"Employee Basic Information"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Employee Basic Information Created successfully.
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default SuccessAlert;
