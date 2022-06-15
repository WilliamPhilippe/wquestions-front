import { CircularProgress } from "@mui/material";
import { CenteredContainer } from "../Containers/centeredContainer";

export const LoadingIcon = () => <CircularProgress />;

export const LoadingContainer = () => (
  <CenteredContainer>
    <div className="flex flex-row justify-center items-center">
      <LoadingIcon />
    </div>
  </CenteredContainer>
);
