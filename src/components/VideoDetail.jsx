import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [likes, setLikes] = useState(null);
  //useParams:現在のURLに含まれるパラメーターを取得
  const { id } = useParams();

  const youtubeData = async () => {
    const response = await fetchFromAPI(`https://yt-api.p.rapidapi.com/video/info?snippet,statisticks&id=${id}`)
    setVideoDetail(response.data);
    const response2 = await fetchFromAPI(`https://yt-api.p.rapidapi.com/related?part=snippet&id=${id}&type=video`)
    setVideos(response2.data.data);
    setLikes(response2.data.meta.likeCount);
    console.log(response2.data.meta.likeCount)
  };

  useEffect(() => {
    youtubeData();
  }, [id])

  if (!videoDetail) return 'Loading...'

  //controls:再生や一時停止等のボタン
  //py:上下のパディング,px:左右のパディング,ml:マージンレフト,gap:子要素間の間隔
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`}
              className="react-player" controls />
            <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
              {videoDetail.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${videoDetail.channelId}`}>
                <Typography color='#ffF' >

                  {videoDetail.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail.viewCount).toLocaleString()}views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likes).toLocaleString()}likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail