import React from "react";
import { AppBar,Toolbar} from "@mui/material";
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
const Header = () => {
  return(
 <AppBar>
    <Toolbar>
     <SpaRoundedIcon/>
    </Toolbar>
 </AppBar>

  );
  
};

export default Header;