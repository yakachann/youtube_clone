import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
// import Sidebar from './Sidebar';
// import Videos from './Videos';
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

//Stackでラップ（小さい画面sxの場合は縦方向に動画を並べるcolumn,中程度の画面mdでは横方向に動画を並べるrow)
//Typographyはテキストを表示するためのコンポーネント（mtで上の余白を設定）
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar />
        <Typography className="copyright" variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2022 JSM Media

        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="boid" mb={2} sx={{ color: 'white' }}>
          New <span style={{ color: '#F31503' }}>videos</span>
        </Typography>

        <Videos videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed