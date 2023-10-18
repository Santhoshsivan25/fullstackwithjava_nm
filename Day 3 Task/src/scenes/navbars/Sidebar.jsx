// React Module
import { React,  useState } from 'react'
import { Link } from 'react-router-dom';
// MUI Module
import { Box, IconButton, Typography } from '@mui/material';
// React Pro Sidebar
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// MUI Icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import MeetingRoomTwoToneIcon from '@mui/icons-material/MeetingRoomTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';


// Menu Item Component
const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        margin:'20px 0 10px 0',
        '& focus':{ color: 'red !important'}
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};


// Sidebar Component
export const Sidebar = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected , setSelected] = useState('Dashboard');

  return (

     //  React Pro Sidebar 
     <Box sx={{ 
      "& .pro-sidebar-inner": {
         background: "#D5DBF5 !important"
      },
     "& .pro-icon-wrapper": {
       backgroundColor: "transparent !important",
     },
     "& .pro-inner-item": {
       padding: "5px 35px 5px 20px !important",
       color: "#000 !important"
     },
     "& .pro-inner-item:hover": {
       color: "indigo !important",
     }
     }}
      >
          
        <ProSidebar collapsed={isCollapsed}>

          <Menu iconShape='square'>
            
            {/* Sidebar Title and ToggleBar */}
            <Box sx={{margin:'10px 0 20px 0px'}}>

              <MenuItem 
              onClick={() => { setIsCollapsed(!isCollapsed) }}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}>
                {
                  !isCollapsed && (<Box display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px">
                    <Typography variant='h6'>SideBar</Typography>
                    <IconButton onClick={() => { setIsCollapsed(!isCollapsed) }}><MenuOutlinedIcon/></IconButton>
                  </Box>)
                }
              </MenuItem>
            </Box>

            {/* Sidebar Header Img and Descriptio */}
            {
              !isCollapsed && (
                <Box mb={3}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <img src='../../assets/user.jpg' 
                      alt='imh' 
                      width="100px"
                      height="100px"
                      style={{ cursor: "pointer", borderRadius: "50%" }}></img>
                    </Box>
                    <Box textAlign="center">
                      <Typography
                        variant="h6"
                        color={'#000'}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                      >
                        Aathavan
                      </Typography>
                      <Typography  color={'#000'}>
                        Staff at ABC University
                      </Typography>
                    </Box>
                </Box>
              )
            }

            {/* Sidebar Menu Items from Item Components*/}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>

              <Item
                title="Dashboard"
                to="/"
                icon={<HomeTwoToneIcon />}
                selected={selected}
                setSelected={setSelected}

              />

              <Item
                title="Employee"
                to="/employees"
                icon={<PeopleAltTwoToneIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Students"
                to="/students"
                icon={<AirlineSeatReclineNormalIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Classes"
                to="/classes"
                icon={<MeetingRoomTwoToneIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Attendance"
                to="/attendance"
                icon={<AssignmentIndTwoToneIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Usersection"
                to="/usersection"
                icon={<BadgeTwoToneIcon />}
                selected={selected}
                setSelected={setSelected}
              />

             <Item
                title="Documentation"
                to="/documentation"
                icon={<DescriptionTwoToneIcon />}
                selected={selected}
                setSelected={setSelected}
              />

            </Box>

          </Menu>

        </ProSidebar>

     </Box>
  )
}
