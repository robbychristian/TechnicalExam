import { LinearProgress } from "@mui/material";
import React from "react";

const LoadingModal = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-screen">
      <LinearProgress variant="indeterminate" />
    </div>
  );
};

export default LoadingModal;
