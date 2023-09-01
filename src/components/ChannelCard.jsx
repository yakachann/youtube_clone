import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop}) => {
  // console.log("Detail情報:" + JSON.stringify(channelDetail))
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia image={channelDetail?.channelThumbnail[0].url || demoProfilePicture}
            alt={channelDetail?.channelTitle}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', md: 2, border: '1px solid #e3e3e3' }}
          />
          <Typography variant="h6">
            {channelDetail?.channelTitle}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          {channelDetail?.viewCount && (
            <Typography>
              {parseInt(channelDetail?.viewCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard