import { SearchOutlined } from '@mui/icons-material'
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import { Box, IconButton, InputBase } from '@mui/material'

import React from 'react'

export const Topbar = () => {
  return (
    
    
    <Box display={'flex'} justifyContent={'space-between'} p={2}>
        
      
        <Box display={'flex'} borderRadius={'30px'} border={'solid 1px'} bgcolor={'#D5DBF5'}>
            <InputBase sx={{ flex:1 , ml:2 }} placeholder='search'></InputBase>
            <IconButton sx={{ p:1 }} type='button'>
                <SearchOutlined />
            </IconButton>
        </Box>

        <Box display={'flex'}>
            <IconButton className='top-bar-icon'>
                <NotificationsTwoToneIcon/>
            </IconButton>
            <IconButton className='top-bar-icon'>
                <SettingsSuggestTwoToneIcon/>
            </IconButton>
            <IconButton className='top-bar-icon'>
                <PermIdentityTwoToneIcon/>
            </IconButton>
        </Box>

    </Box>

  )
}
