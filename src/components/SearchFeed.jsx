import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

//Stackでラップ（小さい画面sxの場合は縦方向に動画を並べるcolumn,中程度の画面mdでは横方向に動画を並べるrow)
//Typographyはテキストを表示するためのコンポーネント（mtで上の余白を設定）
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  //APIからデータの取得。search:youtubeの検索機能、part=shippet:検索結果(snippetは動画のタイトル、説明等の基本情報)
  //q=の後ろに具体的なキーワードを指定することで関連する動画を検索
  //※「search?part=snippet&q=」の形式はyoutube data apiが提供する特定のエンドポイントとパラメーター
  //useEffectは第2引数の値が変化したときに実行される関数を受け取る(第2引数が空[]の場合は初回1度だけの実行)
  //fetchFromAPIでasync-awaitを使っているが、その場合戻り値がpromise型では無くなるため、thenは使用できない(useEffectではasync-awaitは使用非推奨)
  const getYoutube = async () => {
    setVideos((await fetchFromAPI(`https://yt-api.p.rapidapi.com/search?part=snippet&q=${searchTerm}`)).data.data)
  }

  useEffect(() => {
    getYoutube()
  }, [searchTerm]);

  return (

    <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="boid" mb={2} sx={{ color: 'white' }}>
        Search Results for:<span style={{ color: '#F31503' }}>{searchTerm}</span>videos
      </Typography>

      <Videos videos={videos} />
    </Box>

  )
}

export default SearchFeed