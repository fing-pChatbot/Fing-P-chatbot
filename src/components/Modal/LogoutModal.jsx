import React from "react";
import { Dialog, DialogActions, DialogTitle, Button, Box } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";

const LogoutModal = ({ open, onClose }) => {
  const { logout } = useAuth();

  const handleConfirm = () => {
    logout();
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
      <DialogTitle>로그아웃 하시겠습니까?</DialogTitle>
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

export default LogoutModal;
