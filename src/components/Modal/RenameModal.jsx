import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  Box,
} from "@mui/material";

const RenameModal = ({ open, onClose }) => {
  const [newName, setNewName] = useState("");

  const onConfirm = (newName) => {
    // 백엔드 호출
    console.log("New name is", newName);
  };

  const handleConfirm = () => {
    onConfirm(newName);
    setNewName("");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "50%",
          borderRadius: "30px",
        },
      }}
    >
      <DialogTitle>이름을 변경하시겠습니까?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            variant="outlined"
            value={newName}
            fullWidth
            onChange={(e) => setNewName(e.target.value)}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Box
          display="flex"
          justifyContent="space-between"
          width="fit-content"
          p={2}
          gap={1}
        >
          <Button onClick={onClose} variant="outlined">
            취소
          </Button>
          <Button onClick={handleConfirm} variant="contained" color="success">
            확인
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default RenameModal;
