import React from 'react'
import  {AppBar, Toolbar  , Typography }  from '@mui/material'
import ScienceIcon from '@mui/icons-material/Science';

const Header = () => {
    return (
        
        <AppBar position="relative" color="warning" sx={{ p: 2 }}>
        <Toolbar>
            <ScienceIcon fontSize='large'/>
          <Typography variant="h4" color="inherit" noWrap>
            Breaking Bad
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Header
