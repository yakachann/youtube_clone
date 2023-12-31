import { Stack } from '@mui/material';
import { Categories } from '@mui/icons-material';
import { categories } from '../utils/constants';

//directionをrowに設定することで要素を横方向に並べる
//overflowYでautoは要素が画面に納まりきらないときは縦スクロールバーの表示
//flexdirectionでは画面中サイズmdの時に要素を縦方向に並べる表示
const Sidebar = ({selectedCategory, setSelectedCategory}) =>  (
    <Stack
      direction="row"
      sx={ {
        overflowY: "auto",
        height: { sx: 'auto', md: '95%'},
        flexDirection: { md: 'column'}
      }}>
      {categories.map((category) => (
        <button 
          className="category-btn" 
          onClick={() => setSelectedCategory(category.name)}
          style={{
              background: category.name === selectedCategory && '#FC1503',
              color: 'white'
          }}
          key={category.name}
          >
          <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
        </button>
      ))}

    </Stack>
  )

export default Sidebar