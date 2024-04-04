import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

export const EndCallDialog: React.FC<{ open: boolean; setOpen: (value: boolean) => void }> = ({ open, setOpen }) => {
  const buttonStyle = {
    width: "100%",
    margin: "0px",
    bgcolor: "#D8F0FF",
    color: "black",
    textTransform: "none",
    fontSize: "12px",
    padding: "10px"
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={false}
      maxWidth={"sm"}
      sx={{ borderRadius: "24px" }}
    >
      <DialogTitle id="alert-dialog-title" textAlign="center">
        <img src="/assets/phone.svg" alt="phone logo" />

        <Typography fontSize="18px">
          Are you sure you want to{" "}
          <Typography fontWeight="600" fontSize="18px" component="span">
            end the chat?
          </Typography>
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" fontSize="15px" textAlign="center">
          Exiting now will result in losing the summary of our conversation.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Box width="100%">
          <Button color="primary" sx={{ ...buttonStyle, borderRadius: "12px 12px 4px 4px" }} onClick={() => setOpen(false)}>
            Yes, end call
          </Button>
          <Button
            color="primary"
            sx={{ ...buttonStyle, marginTop: "3px", borderRadius: "4px 4px 12px 12px " }}
            onClick={() => setOpen(false)}
          >
            No, continue
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
