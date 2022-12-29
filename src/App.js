import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material' ;
import { Navbar,SearchFeed,Feed,ChannelDetail,VideoDetail } from "./components";

const App = () => (
 <BrowserRouter>
  <Box sx={{backgroundColor: "#000"}}>
     <Navbar/>
      <Routes>
       <Route path="/" exact element={<Feed sx={{backgroundcolor: '#000'}}/>}/>
       <Route path="/video/:id" element={<VideoDetail sx={{backgroundcolor: '#000'}}/>}/>
       <Route path="/Channel/:id" element={<ChannelDetail/>}/>
       <Route path="/search/:serchTerm" element={<SearchFeed/>}/>
      </Routes>
  </Box>
 </BrowserRouter>

);
   

export default App

