//Link:リンクの作成,CheckCircle:チェックマークの作成,Typography:テキストの見栄え
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

//boxShadow:影の効果,borderRadius:カードの角丸の半径
const VideoCard = ({ video: { videoId, channelId, thumbnail, title, channelTitle } }) => {

  return (
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>

        <CardMedia
          image={thumbnail[0].url}
          alt={title}
          sx={{ width: 358, height: 180 }} />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
            {title ? title.slice(0, 60) : demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelId ? `channel/${channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight="bold" color="gray">
            {channelTitle ? channelTitle.slice(0, 60) : demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard