import { Box } from "@mui/material";
import { useState } from "react";
import { EndCallDialog } from "../dialog/end-call-dialog";

const Navbar = () => {
  const [isEndCallDialog, setIsEndCallDialog] = useState<boolean>(false);

  // const borderBottom = location.pathname === "/" ? { xs: "0px", sm: "1px solid #E5E7EB" } : "1px solid #E5E7EB";

  return (
    <Box width="100%" zIndex={999} position="sticky" top={0}>
      <Box
        sx={{
          // border: "1px solid",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "white",
          padding: {
            xs: "11px 20px",
            md: "20px"
          },
          borderBottom: "1px solid #E5E7EB"
        }}
      >
        <img src="/assets/tcog.svg" alt="tcognition logo" height="100%" />

        {/* <PrimaryButton
          textcolor="red"
          border="1px solid #E5E7EB"
          padding="9px 12px"
          onClick={() => setIsEndCallDialog(true)}
        >
          End Call
        </PrimaryButton> */}
        {/* Will add in future */}
      </Box>

      {isEndCallDialog && <EndCallDialog open={isEndCallDialog} setOpen={setIsEndCallDialog} />}
    </Box>
  );
};

export default Navbar;
