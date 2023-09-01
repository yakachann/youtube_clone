//Stack：垂直軸or水平軸に沿った即時の子レイアウトを管理、Box：Cssユーティリティに必要なもののほとんどのラッパーとして機能
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard} from './';

const Videos = ({ videos }) => {
  // console.log(videos);

  return (
    //flexWrap="wrap":Boxの中の要素がコンテナの幅を超えるときに新しい行に折り返す
    //justifyContent:Boxコンテナ内の要素を水平方向にどのように配置するのかを決定,start:コンテナの開始幅に設定（左端or上端）
    //gap:要素間のスペースの設定
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.videoId && <VideoCard video={item} />}
          {item.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos