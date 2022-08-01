import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Card() {
  const [open, setOpen] = useState(false);
  const [userID, setuserID] = useState(null);
  const [instanceWord, setinstanceWord] = useState();
  const [instanceCost, setinstanceCost] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Complete an Instance</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Complete an instance
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4 }}>
            <Box>
              <input type="text" name="name" placeHolder="name" value={userID}/>
              <input type="text" name="word" placeHolder="word" value={instanceWord}/>
              <input type="text" name="amount" placeHolder="$ amount" value={instanceCost}/>
            </Box>
            <button>Submit</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
