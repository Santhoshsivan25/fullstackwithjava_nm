import { Box } from '@mui/material'
import React from 'react'
// import Barchart from '../../components/Barchart'
import Header from '../../components/Header'
import Linechart from '../../components/Linechart'



export const Students = () => {
  return (
    <Box m="20px">
      <Header title="Student Page" subtitle="Simple Student Page" />
      <Box height="75vh">
        {/* <Barchart/> */}
        <Linechart/>
      </Box>
    </Box>
  )
}
