import { Box} from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import Barchart from '../../components/Barchart'
import Linechart from '../../components/Linechart'


export const Dashboard = () => {
  return (
    <Box m={'20px'}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Box height="75vh">
        <Barchart/>
        <Linechart/>
      </Box>
    </Box>
  )
}
