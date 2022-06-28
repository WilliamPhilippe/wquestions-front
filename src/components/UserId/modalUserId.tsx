import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface IProps {
  onSaveUser: (user: string) => void;
}

export const ModalUserId = ({ onSaveUser }: IProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [userValue, setUserValue] = useState<string | undefined | null>("");

  const onClickSave = () => {
    if (userValue) {
      onSaveUser(userValue);
      setOpenDialog(false);
      setUserValue("");
    }
  };

  return (
    <>
      {openDialog && (
        <Dialog
          open={openDialog}
          maxWidth="sm"
          fullWidth
          onClose={() => setOpenDialog(false)}
        >
          <DialogTitle>Carregar Usuário </DialogTitle>
          <DialogContent>
            <TextField
              sx={{ marginTop: "1rem" }}
              name="user"
              value={userValue}
              onChange={(e) => setUserValue(e.target.value)}
              fullWidth
              placeholder="Digite seu usuário"
              label="Usuário"
            />
          </DialogContent>
          <DialogActions>
            <div className="w-full flex flex-row justify-between">
              <Button onClick={() => setOpenDialog(false)} color="inherit">
                Voltar
              </Button>
              <Button onClick={onClickSave} disabled={!userValue}>
                Carregar Questões
              </Button>
            </div>
          </DialogActions>
        </Dialog>
      )}
      <Button onClick={() => setOpenDialog(true)}>usar Outro Usuário</Button>
    </>
  );
};
