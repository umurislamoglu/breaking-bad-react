import React from "react";
import { Typography  } from "@mui/material";

const DetailTypography = ({ title, value }) => {
  return (
    < >
      <Typography variant="h6">{title}</Typography>
      <Typography  sx= {{mb:2}}>{value}</Typography>
    </>
  );
};

export default DetailTypography;
