import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";



const CannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [ videos, setVideos ] = useState([]);
  //useParams:URL内のパラメーターをオブジェクトとして返す
  const { id } = useParams();
  const getDetail = async () => {
    const response = await fetchFromAPI(`https://yt-api.p.rapidapi.com/channel/channels?part=snippet&id=${id}`)
    setChannelDetail({channelThumbnail:response.data.meta.avatar,channelId:response.data.meta.channelId, channelTitle:response.data.meta.title, viewCount:response.data.meta.subscriberCount})

  }
  const getDetail2 = async () => {
    const response = await fetchFromAPI(`https://yt-api.p.rapidapi.com/channel/videos?id=${id}&part=snippet&sort_by=newest`)
    setVideos(response.data.data);
  }
  useEffect(() => {
    getDetail();
    getDetail2();
  }, [id])

  //CSS GradientというサイトからCSSを引用,zIndex:要素の重なり順を指定する
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(206,3,184,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail}
        marginTop="-110px"/>
      </Box>
        <Box display="flex" p="2">
          <Box sx={ {mr: {sm: '100px'}}}>
            <Videos videos={videos}/>
          </Box>

        </Box>
    </Box>
  )
}
export default CannelDetail

