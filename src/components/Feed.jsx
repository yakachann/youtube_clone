import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
// import Sidebar from './Sidebar';
// import Videos from './Videos';
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

//Stackでラップ（小さい画面sxの場合は縦方向に動画を並べるcolumn,中程度の画面mdでは横方向に動画を並べるrow)
//Typographyはテキストを表示するためのコンポーネント（mtで上の余白を設定）
const Feed = () => {

  //useState:Reactの状態を管理するためのもの
  //変数selectedCategoryは'New'で初期化されていて、これはsetSelectedCategory関数で値が変化する
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  //APIからデータの取得。search:youtubeの検索機能、part=shippet:検索結果(snippetは動画のタイトル、説明等の基本情報)
  //q=の後ろに具体的なキーワードを指定することで関連する動画を検索
  //※「search?part=snippet&q=」の形式はyoutube data apiが提供する特定のエンドポイントとパラメーター
  //useEffectは第2引数の値が変化したときに実行される関数を受け取る(第2引数が空[]の場合は初回1度だけの実行)
  useEffect(() => {
    // fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
    fetchFromAPI(`?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}/>
        <Typography className="copyright" variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2022 JSM Media

        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="boid" mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed