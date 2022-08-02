import React, { useState, useEffect } from "react";
import Axios from "axios";
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
  const [userName, setuserName] = useState();
  const [instanceWord, setinstanceWord] = useState();
  const [instanceCost, setinstanceCost] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNameChange = (e) => {
    setuserName(e.target.value);
  };

  const handleWordChange = (e) => {
    setinstanceWord(e.target.value);
  };

  const handleCostChange = (e) => {
    setinstanceCost(e.target.value);
  };

  const submitInstance = () => {
    Axios.post("http://localhost:3001/api/insert", {
      userName: userName,
      instanceWord: instanceWord,
      instanceCost: instanceCost,
    }).then(() => {
        alert('successful post/insert')
    });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Complete an Instance
      </Button>
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
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={handleNameChange}
              />
              <input
                type="text"
                name="word"
                placeholder="word"
                onChange={handleWordChange}
              />
              <input
                type="text"
                name="amount"
                placeholder="$ amount"
                onChange={handleCostChange}
              />
            </Box>
            <button onClick={submitInstance}>Submit</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

// write handle onChange for inputs
// update react states based on text input -> figure out a way to use those states as db entries
