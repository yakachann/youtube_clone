const axios = require('axios');
//process.env.REACT_APP_RAPID_API_KEY

//fetchFromAPIでgetメソッドを使用しているためoptionsにはurl不要
const options = {
  method: 'GET',
//  url: 'https://yt-api.p.rapidapi.com/search',
  params: {
           
  },
  headers: {
    'X-RapidAPI-Key': '26e79d0b15msh7875fffc8624bc3p1a3725jsn3729e8066855',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  }
};

/**
 * exportで外部からファイルを利用できるように公開
 * async-await:async(url)=>...は非同期のアロー関数。asyncで非同期関数を定義して関数内でawaitを使うことで動作が完了するまで次の実行を待つ
 * 非同期通信:特定の処理が完了するのを待たずに次の処理を進めることができる（レストランのシェフのように）
 * axios:jsでHTTPリクエストを行うためのライブラリ（GET、POSTなど様々な種類のHTTPリクエストを簡単にできるようになる）
 */
export const fetchFromAPI = async(url) => {
  //const { data } = await axios.get(url, options);
  //return data.data;
  const res = await axios.get(url, options);
  return res;
}